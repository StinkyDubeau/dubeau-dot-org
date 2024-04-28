import { joinRoom } from "trystero";
import { useState, useEffect } from "react";
import Frame from "../../components/Frame";
import MessageFeed from "./MessageFeed";
import UserProfile from "./UserProfile";
import MessageEntry from "./MessageEntry";
import UsersList from "./UsersList";

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
            <div className="fixed left-0 top-0 h-screen w-screen border border-blue-500 p-2 pt-16">
                <div className="h-full w-full border border-yellow-500 p-2">
                    <div className="flex h-full flex-col justify-between gap-2 border border-cyan-300 p-2">
                        <div className="flex-0 h-12 border border-green-400 sm:hidden">
                            {/* USERS */}
                            <UsersList users={users} />
                        </div>
                        <div className="flex flex-1 justify-center overflow-scroll border-2 border-red-400">
                            {/* MESSAGES */}
                            <div className="flex gap-2">
                                <div className="flex-0 max-sm:hidden">
                                    <UsersList users={users} />
                                </div>
                                <div className="flex-1">
                                    <MessageFeed messages={messages} />
                                </div>
                            </div>
                        </div>
                        <div className="flex-0 h-12 border border-green-400">
                            {/* INPUT FIELD */}
                            <MessageEntry
                                myMessage={myMessage}
                                setMyMessage={setMyMessage}
                                sendMyMessage={sendMyMessage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Frame>
    );

    // return (
    //     <Frame data={props.data}>
    //         <p className="font-header text-xl text-darken-800">p2p chat</p>
    //         <UserProfile user={myUser} />
    //         <div className="fixed left-0 top-0 flex h-screen w-screen flex-col justify-between gap-2 bg-blue-400 p-2 pt-16">
    //             {/* USERS LIST */}
    //             <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-3 text-darken-800 shadow-lg sm:hidden">
    //                 <UsersList users={users} />
    //             </div>
    //             {/* MESSAGE FEED */}
    //             <div className="flex h-full w-full basis-5 justify-center gap-2 bg-orange-300 max-lg:max-h-[75%] max-md:max-h-[80%] max-sm:max-h-[60%] lg:max-h-[90%]">
    //                 <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-3 text-darken-800 shadow-lg max-sm:hidden">
    //                     <UsersList users={users} />
    //                 </div>
    //                 <div className="w-full overflow-scroll rounded-3xl bg-lighten-800 shadow-lg">
    //                     <div className="m-3 h-full p-3 text-darken-800">
    //                         <MessageFeed messages={messages} />
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* MESSAGE ENTRY */}
    //             <div className="relative bottom-0 flex flex-col gap-2 rounded-3xl bg-lighten-800 p-3 text-darken-800 shadow-lg">
    //                 <MessageEntry
    //                     myMessage={myMessage}
    //                     setMyMessage={setMyMessage}
    //                     sendMyMessage={sendMyMessage}
    //                 />
    //             </div>
    //         </div>
    //     </Frame>
    // );
}
