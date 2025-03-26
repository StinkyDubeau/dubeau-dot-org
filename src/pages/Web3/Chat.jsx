import { joinRoom } from "trystero";
import { useState, useEffect } from "react";
import Frame from "../../components/Frame";
import MessageFeed from "./MessageFeed";
import UserProfile from "./UserProfile";
import MessageEntry from "./MessageEntry";
import UsersList from "./UsersList";
import NavButtons from "../../components/NavButtons";

export default function Chat(props) {
    const nick = props.nick;
    const roomID = props.roomID || "global";
    const appID = "dubeau-dot-org";

    const room = joinRoom({ appId: appID }, roomID);

    const [myMessage, setMyMessage] = useState("");
    const [myUser, setMyUser] = useState(null);

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    // Actions
    const [sendMessage, getMessage] = room.makeAction("message");
    const [sendUser, getUser] = room.makeAction("user");
    const [sendUserUpdate, getUserUpdate] = room.makeAction("userUpdate");

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

    function initializeUser() {}

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
            await sendUser(
                myUser ? myUser : { ...user, nick: nick },
                idOfSendingPeer,
            ).then(() => {
                // Apply our nickname if we joined the server with one
                if (nick) {
                    user = { ...user, nick: nick };
                }
                !myUser
                    ? setMyUser(user)
                    : setMyUser({
                          ...myUser,
                          karma: myUser.karma ? myUser.karma + 1 : 1,
                      });
            });
        }
    });

    getMessage((message, idOfSendingPeer, metadata) => {
        console.log(
            `Info | getMessage(): Message: ${message}, idOfSendingPeer: ${idOfSendingPeer}`,
        );

        setMessages([...messages, message]);
    });

    getUserUpdate((user, idOfSendingPeer, metadata) => {
        console.log(
            `Info | getUserUpdate(): Updated user: ${user}, idOfSendingPeer: ${idOfSendingPeer}`,
        );

        // Remove old user
        // setUsers();

        // Add updated user
        setUsers([
            ...users.filter((user) => user.id !== idOfSendingPeer),
            user,
        ]);
    });

    async function sendMyUserUpdate(user) {
        console.log("Updating my user");

        await sendUserUpdate(user).then(() => setMyUser(user));
    }

    function serverSay(message) {
        setMessages([
            ...messages,
            {
                content: message,
                timestamp: new Date(),
                from: {
                    id: "Server",
                    nick: "Server",
                    dob: new Date(),
                    colour: "#0f8f3f",
                    peerID: "Server",
                },
            },
        ]);
    }

    async function sendMyMessage(text) {
        // Show an error in the feed if there are no peers to send to
        if (users.length < 1) {
            serverSay("There is nobody to send your message to.");
            return;
        }

        const message = { content: text, timestamp: new Date(), from: myUser };

        await sendMessage(message).then(() =>
            setMessages([...messages, message]),
        );

        //Clear the text field after sending
        setMyMessage("");
    }

    return (
        <div className="pt fixed left-0 top-0 h-dvh w-dvw p-2">
            <div className="h-full w-full">
                <div className="flex h-full flex-col justify-between gap-2">
                    <div className="flex-0 h-12 overflow-auto rounded-3xl bg-lighten-800 sm:hidden">
                        {/* USERS */}
                        <UsersList
                            myUser={myUser}
                            users={users}
                            roomID={roomID}
                        />
                    </div>
                    <div className="bg-green flex flex-1 justify-center overflow-auto max-sm:mb-2">
                        {/* MESSAGES */}
                        <div className="flex w-full gap-2 overflow-auto">
                            <div className="flex flex-col gap-2">
                                <div className="flex-shrink overflow-auto rounded-3xl bg-lighten-800 p-2 max-sm:hidden">
                                    <NavButtons />
                                </div>
                                <div className="flex-grow overflow-auto rounded-3xl bg-lighten-800 p-2 max-sm:hidden">
                                    <UsersList
                                        myUser={myUser}
                                        users={users}
                                        roomID={roomID}
                                    />
                                </div>
                            </div>
                            <div className="flex-1 overflow-scroll rounded-3xl bg-lighten-800 p-2 scrollbar-hide max-xs:-ml-2">
                                <MessageFeed messages={messages} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-0 bg-lighten-800 p-2 max-sm:-m-2 sm:rounded-3xl">
                        {/* INPUT FIELD */}
                        <MessageEntry
                            // Is there some structuring magic I can do to make this less awful?
                            myMessage={myMessage}
                            setMyMessage={setMyMessage}
                            sendMyMessage={sendMyMessage}
                            sendMyUserUpdate={sendMyUserUpdate}
                            myUser={myUser}
                            setMyUser={setMyUser}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
