import { joinRoom } from "trystero";
import Frame from "../../components/Frame";
import { useState, useEffect } from "react";

export default function Chat(props) {
    const roomID = "a1";
    const appID = "app_identifier_jkl234-9.;2/asd90f83jkl";

    const room = joinRoom({ appId: appID }, roomID);

    const [myMessage, setMyMessage] = useState("");
    const [myUser, setMyUser] = useState(null);
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

        if (idOfSendingPeer === user.id) {
            console.log(`Adding ${user.id} to the list of users.`);
            setUsers([...users, user]);
        } else if (user.id !== idOfSendingPeer) {
            console.log("Just got my own ID.");
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
    });

    return (
        <Frame data={props.data}>
            <p className="font-header text-xl text-darken-800">p2p chat</p>
            <p>My ID: {myUser ? myUser.id : "You have no identity."}</p>
            <p>My Karma: {myUser ? myUser.karma : "You have no karma."}</p>
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
            {/* MESSAGE ENTRY */}
            <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendMyMessage(myMessage);
                    }}
                >
                    <div className="flex gap-2">
                        <input
                            className="w-full rounded-full bg-darken-50 p-2 shadow-inner"
                            value={myMessage}
                            placeholder="Message"
                            onChange={(e) => setMyMessage(e.target.value)}
                        />
                        <button
                            className="w-24 rounded-full bg-darken-50 transition-all hover:bg-darken-100"
                            type="submit"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </Frame>
    );
}
