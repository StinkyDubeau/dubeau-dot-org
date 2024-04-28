import { joinRoom } from "trystero";
import { useState, useEffect } from "react";
import Frame from "../../components/Frame";
import MessageFeed from "./MessageFeed";
import UserProfile from "./UserProfile";
import MessageEntry from "./MessageEntry";

export default function Chat(props) {
    const roomID = "a1";
    const appID = "app_identifier_jkl234-9.;2/asd90f83jkl";

    const room = joinRoom({ appId: appID }, roomID);

    const [myMessage, setMyMessage] = useState("");
    const [myUser, setMyUser] = useState(null);

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    // Actions
    const [sendMessage, getMessage] = room.makeAction("message");
    const [sendUser, getUser] = room.makeAction("user");

    room.onPeerJoin(async (idOfJoiningPeer) => {
        console.log(`${idOfJoiningPeer} is connecting...`);

        // Bounce ID back to joining peer
        await sendUser(
            { id: idOfJoiningPeer, dob: new Date() },
            idOfJoiningPeer,
        ).then(() => {
            console.log(`${idOfJoiningPeer} connected.`);
            // // Send my id to joining peer once they've connected.
            // if (myUser) {
            //     console.log("PEERJOIN sending my user elsewhere.");
            //     sendUser(myUser, idOfJoiningPeer);
            // }
        });
    });

    room.onPeerLeave((idOfLeavingPeer) => {
        console.log(`${idOfLeavingPeer} disconnected.`);
        setUsers(users.filter((user) => user.id !== idOfLeavingPeer));
    });

    getUser(async (user, idOfSendingPeer, metadata) => {
        console.log(
            `Info | getUser(): User: ${user.id}, idOfSendingPeer: ${idOfSendingPeer}`,
        );

        // Check if this is a peer self-identifying. Add to list of users if so
        if (idOfSendingPeer === user.id) {
            console.log(`Adding ${user.id} to the list of users.`);
            setUsers([...users, user]);
            // Check if this is a peer telling us our ID
        } else if (user.id !== idOfSendingPeer) {
            console.log("Just got my own ID.");
            // Reply to other users informing that we are online.
            await sendUser(user, idOfSendingPeer).then(
                !myUser
                    ? setMyUser(user)
                    : setMyUser({
                          ...myUser,
                          karma: myUser.karma ? myUser.karma + 1 : 1,
                      }),
            );
        }
    });

    getMessage((message, idOfSendingPeer, metadata) => {
        console.log(
            `Info | getMessage(): Message: ${message}, idOfSendingPeer: ${idOfSendingPeer}`,
        );

        setMessages([...messages, message]);
    });

    async function sendMyMessage(text) {
        const message = { content: text, timestamp: new Date(), from: myUser };
        await sendMessage(message).then(() =>
            setMessages([...messages, message]),
        );

        //Clear the text field after sending
        setMyMessage("");
    }

    return (
        <Frame data={props.data}>
            <p className="font-header text-xl text-darken-800">p2p chat</p>
            <UserProfile user={myUser} />
            <div>
                <p>Users: </p>
                <ul>
                    {users[0]
                        ? users.map((user, index) => {
                              return <li key={index}>{user.id}</li>;
                          })
                        : "There are no users."}
                </ul>
            </div>
            {/* MESSAGE FEED */}
            <MessageFeed messages={messages} />

            {/* MESSAGE ENTRY */}
            <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                <MessageEntry
                    myMessage={myMessage}
                    setMyMessage={setMyMessage}
                    sendMyMessage={sendMyMessage}
                />
            </div>
        </Frame>
    );
}
