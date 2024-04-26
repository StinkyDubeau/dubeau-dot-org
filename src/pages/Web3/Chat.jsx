import { joinRoom } from "trystero/nostr";
import Frame from "../../components/Frame";
import { useState } from "react";

export default function Chat(props) {
    // Enable to sync old messages when a new user joins. This causes a bug where the entire chatlog will be duped... alot.
    const catchUpMode = false;

    // Handle user's input field
    const [myMessage, setMyMessage] = useState("");
    const [myColour, setMyColor] = useState("");
    const [myId, setMyId] = useState(null);
    const [peers, setPeers] = useState([]);

    // Initialize room
    // Use config {} to join room "global"
    const room = joinRoom(
        { appId: "this_is_the_app_identifier_1342njl0789asdf" },
        "this_is_the_room_id",
    );

    // State to store all messages in context
    const [messages, setMessages] = useState([]);

    // Function to send message to peers
    const [sendMessage, getMessage] = room.makeAction("message");

    room.onPeerJoin((peerID) => {
        if (!myId) {
            console.log("No peers detected. This must be my ID: " + peerID);
            setMyId(peerID);
        } else {
            setPeers({ ...peers, peerID });

            // Send previous messages to the new user if catchUpMode is enabled
            if (catchUpMode) {
                messages[0] !== undefined &&
                    messages.forEach(async (message) => {
                        console.log("sending one");
                        console.log(messages);
                        await sendMessage(message, peerID);
                    });
            }
        }
    });

    room.onPeerLeave((peerID) => {
        console.log(`${peerID} left the room.`);
        setPeers({ ...peers, peerID: null });
    });

    // Listen for messages
    getMessage((message, peerID) => {
        console.log(`Got message from${peerID}: ${message.text}`);
        console.log(message);
        // Add message to our state
        setMessages((messages) => [...messages, message]);
        // setPeerColors((peerColors) => ({ ...peerColors, [peer]: color })),
    });

    // Broadcast a message
    function sendMyMessage(text) {
        setMyMessage("");
        const message = { text: text, time: new Date(), from: myId };

        // Add message to our own client
        setMessages([...messages, message]);

        // Broadcast to other clients
        sendMessage(message);
    }

    function sendMyColour(colour) {
        console.log(`Changed my colour to ${Object.values(colour)}`);
        setMyColor(colour);
    }

    function createMessage(message, index) {
        return (
            <div
                key={index + message}
                className="justify-left flex gap-2 overflow-y-auto overflow-x-scroll rounded-3xl bg-darken-50 px-4 py-2"
            >
                <div className="flex h-full flex-col justify-center">
                    <p className="text-sm text-darken-500">
                        {message.time.toLocaleString()}
                    </p>
                    <p className="text-sm text-darken-500">{message.from}</p>
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

    return (
        <Frame data={props.data}>
            <div className="sm:hidden">
                <p className="z-50 font-header text-xl text-darken-800">
                    Your display is too small!
                </p>
            </div>

            <div className="fixed bottom-0 left-0  z-20 mx-auto flex h-full w-full justify-between p-2 pt-16 shadow-lg backdrop-blur-3xl transition-all">
                <div className="flex w-full flex-col justify-between gap-2">
                    {/* HEADER */}
                    <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                        <p className="text-red-500">
                            This is an experimental, decentralized chat. All
                            messages are ephemeral, and will be lost as soon as
                            all peers are disconnected.
                        </p>
                        <p>My ID: {myId}</p>
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
