import { joinRoom } from "trystero";
import Frame from "../../components/Frame";
import { useState } from "react";

export default function Astros(props) {
    // Handle user's input field
    const [myMessage, setMyMessage] = useState("");
    const [myColour, setMyColor] = useState("");
    const [peers, setPeers] = useState({});

    // Use config {} to join room "global"
    const room = joinRoom(
        { appId: "this_is_the_app_identifier_1342njl0789asdf" },
        "this_is_the_room_id",
    );

    room.onPeerJoin((peerID) => {
        console.log(`${peerID} joined the room.`);
        setPeers({ ...peers, peerID });
        sendMessage({ text: `${peerID} joined the room.`, time: new Date() });
    });

    room.onPeerLeave((peerID) => {
        console.log(`${peerID} left the room.`);
        setPeers({ ...peers, peerID: null });
    });

    // Function to send message to peers
    const [sendMessage, getMessage] = room.makeAction("message");
    // State to store all messages in context
    const [messages, setMessages] = useState([]);

    // Listen for messages
    getMessage((message, peerID) => {
        console.log(`${peerID} said ${message}`);
        // Add message to our state
        setMessages([...messages, message]);
    });

    // Broadcast a message
    function sendMyMessage(text) {
        const message = { text: text, time: new Date() };
        console.log(`Broadcasting: ${Object.values(message)}`);
        // Add message to our own client
        setMessages([...messages, message]);
        // Broadcast to other clients
        sendMessage(message);
    }

    function sendMyColour(colour) {
        console.log(`Changed my colour to ${Object.values(colour)}`);
        setMyColor(colour);
    }

    console.log(`Peers: ${Object.values(room.getPeers())}`);

    function createMessage(message, index) {
        return (
            <div
                key={index}
                className="justify-left flex gap-2 rounded-full bg-lighten-800 px-4 py-2 shadow"
            >
                <p className="my-auto text-sm text-darken-500">
                    {message.time.toLocaleString()}
                </p>
                <p className="my-auto overflow-scroll text-lg text-darken-800">
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

    function createPeer(peer) {
        return (
            <div>
                <p>{Object.values(peer)}</p>
            </div>
        );
    }

    function createPeers(props) {
        return <div>{Object.values(peers).map(createPeer)}</div>;
    }

    return (
        <Frame data={props.data}>
            <div className="max-w-screen mt-12 flex w-full flex-col justify-center gap-2">
                <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                    <p className="text-darken-800">This is an experimental, decentralized chat. All messages are ifemeral, and will be lost as soon as all peers are disconnected.</p>
                </div>
                <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                    {createChat()}
                    {createPeers()}
                </div>
                <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                    <div className="flex gap-2">
                        <input
                            className="w-full rounded-full bg-darken-50 p-2 shadow-inner"
                            value={myMessage}
                            placeholder="Message"
                            onChange={(e) => setMyMessage(e.target.value)}
                        />
                        <div className="flex h-12 w-12 justify-center overflow-clip rounded-full">
                            <input
                                type="color"
                                className="my-auto -mt-2 h-[200%] min-w-24"
                                value={myColour}
                                onChange={(e) => sendMyColour(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-24 rounded-full bg-darken-50"
                            onClick={() => sendMyMessage(myMessage)}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </Frame>
    );
}
