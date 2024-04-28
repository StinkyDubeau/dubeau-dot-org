import { joinRoom } from "trystero";
import Frame from "../../components/Frame";
import { useState, useEffect } from "react";

const roomID = "this_is_the_room_id";
const appID = "this_is_the_app_identifier_1342njl0789asdf";

export default function Chat(props) {
    // Enable to sync old messages when a new user joins. This causes a bug where the entire chatlog will be duped... alot.
    const catchUpMode = false;

    // Handle user's input field
    const [myMessage, setMyMessage] = useState("");
    const [myColour, setMyColor] = useState("");

    const [myUser, setMyUser] = useState({});
    const [loading, setLoading] = useState(true);

    // Age of your instance
    const [dob, setDob] = useState(new Date());

    // Initialize room
    // Use config {} to join room "global"
    const room = joinRoom({ appId: appID }, roomID);

    // Action context
    const [messages, setMessages] = useState([]);
    const [peers, setPeers] = useState([]);

    // Actions
    const [setNewMessage, getNewMessage] = room.makeAction("newMessage");
    const [setNewUser, getNewUser] = room.makeAction("newUser");

    room.onPeerJoin((peerID) => {
        setLoading(false);

        props.setData({
            ...props.data,
            loading: "Waiting for users",
        });

        if (!myUser.id) {
            // I have joined
            console.log("No peers detected. This must be my ID: " + peerID);
            setMyUser({ ...myUser, id: peerID, dob: new Date() });
            peers.push(`Me: ${peerID}`);
        } else {
            // Someone else joined, send my ID to them
            setNewUser(myUser);
            // setPeers({ ...peers, peerID });

            // Interface with global loading icon
            props.setData({
                ...props.data,
                loading: false,
            });
        }
    });

    room.onPeerLeave((peerID) => {
        console.log(`${peerID} left the room.`);
        setPeers({ ...peers, peerID: null });
    });

    // Listen for new users
    getNewUser((newUser, peerID) => {
        console.log("New user: ", newUser);
        console.log("Their ID: ", peerID);

        if (peerID === myUser.id) {
            console.log("Abort @ getNewUser(): That's my ID.");
            return;
        }

        setPeers({ ...peers, peerID: newUser });
    });

    // Listen for new messages
    getNewMessage((message, peerID) => {
        console.log(`Got message from${peerID}: ${message.text}`);
        console.log(message);
        // Add message to our state
        setMessages((messages) => [...messages, message]);
        // setPeerColors((peerColors) => ({ ...peerColors, [peer]: color })),
    });

    // Broadcast a message
    function sendMyMessage(text) {
        setMyMessage("");

        const message = { text: text, time: new Date(), from: myUser };

        // Add message to our own client
        setMessages([...messages, message]);

        // Broadcast to other clients
        setNewMessage(message);
    }

    function sendMyColour(colour) {
        console.log(`Changed my colour to ${Object.values(colour)}`);
        setMyColor(colour);
    }

    function createMessage(message, index) {
        return (
            <div
                key={index + message.from.id}
                className="justify-left flex gap-2 overflow-y-auto overflow-x-scroll rounded-3xl bg-darken-50 px-4 py-2"
            >
                {/* User ID and Time are hidden on small displays */}
                <div className="flex h-full flex-col justify-center max-sm:hidden">
                    <p className="text-sm text-darken-500">
                        {message.time.toLocaleString()}
                    </p>
                    <p className="text-sm text-darken-500">{message.from.id}</p>
                </div>
                <p className="my-auto text-left text-lg text-darken-800">
                    {message.text}
                </p>
            </div>
        );
    }

    function createChat(props) {
        return (
            <div className="flex flex-col gap-2">
                {messages[0] ? (
                    messages.map(createMessage)
                ) : (
                    <p className="italic text-darken-600">
                        Messages will apear here
                    </p>
                )}
            </div>
        );
    }

    function createPeer(peer, index) {
        if (!peer) {
            return;
        }
        return (
            <div key={index}>
                <p>{Object.values(peer)}</p>
            </div>
        );
    }

    function createPeers(props) {
        return <div>{Object.values(peers).map(createPeer)}</div>;
    }

    // For global loading state
    useEffect(
        () =>
            props.setData({
                ...props.data,
                loading: loading ? { text: "Connecting..." } : false,
            }),
        [loading],
    );

    return (
        <Frame data={props.data}>
            <div className="fixed bottom-0 left-0  z-20 mx-auto flex h-full w-full justify-between p-2 pt-16 shadow-lg backdrop-blur-3xl transition-all">
                <div className="flex w-full flex-col justify-between gap-2">
                    {/* HEADER */}
                    <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                        <p className="text-red-500">
                            This is an experimental, peer-to-peer chat. All
                            messages are ephemeral, and will be lost as soon as
                            all peers are disconnected.
                        </p>
                        <p>My ID: {myUser.id}</p>
                        {/* {room && <p>Room: {room.ping.toString()}</p>} */}
                    </div>
                    {/* BODY */}
                    <div className="flex-0 flex h-full max-h-[80%] basis-auto justify-between gap-2">
                        {/* CHAT */}
                        <div className="flex h-full flex-1 flex-col gap-2 overflow-hidden rounded-3xl bg-lighten-800 p-1.5 text-darken-800 shadow-lg">
                            <div className="z-10 overflow-scroll p-3">
                                {createChat()}
                            </div>
                        </div>
                        {/* USERS */}
                        <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                            <p className="text-lg text-darken-800">Users</p>
                            {createPeers()}
                        </div>
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
                                    onChange={(e) =>
                                        setMyMessage(e.target.value)
                                    }
                                />
                                <div className="flex h-12 w-12 justify-center overflow-clip rounded-full">
                                    <input
                                        type="color"
                                        className="my-auto -mt-2 h-[200%] min-w-24"
                                        value={myColour}
                                        onChange={(e) =>
                                            sendMyColour(e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    className="w-24 rounded-full bg-darken-50 transition-all hover:bg-darken-100"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Frame>
    );
}
