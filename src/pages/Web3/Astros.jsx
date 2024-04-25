import Frame from "../../components/Frame";
import { joinRoom } from "trystero";
import { useState } from "react";

export default function Astros(props) {
    // Handle user's input field
    const [myMessage, setMyMessage] = useState("");
    const [myColour, setMyColor] = useState("");

    // Use config {} to join room "global"
    const room = joinRoom({ appId: "astro_sightings" }, "global");

    room.onPeerJoin((peerID) => console.log(`${peerID} joined the room.`));
    room.onPeerLeave((peerID) => console.log(`${peerID} left the room.`));

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

    console.log(`Peers: ${Object.keys(room.getPeers())}`);

    function createMessage(message, index) {
        return (
            <div
                key={index}
                className="justify-left flex gap-2 rounded-full bg-lighten-800 px-4 py-2 shadow"
            >
                <p className="my-auto text-sm text-darken-500">
                    {message.time.toLocaleString()}
                </p>
                <p className="my-auto text-lg text-darken-800">
                    {message.text}
                </p>
            </div>
        );
    }

    function createChat(props) {
        return (
            <div className="flex flex-col gap-2">
                {messages.map(createMessage)}
            </div>
        );
    }

    return (
        <Frame data={props.data}>
            <div className="mt-12 flex w-[1280px] flex-col justify-center gap-2">
                <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                    {createChat()}
                </div>
                <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                    <p>Astro sightings is going web3, baby.</p>
                    <div className="flex gap-2">
                        <input
                            className="w-full rounded-full bg-darken-50 p-2 shadow-inner"
                            value={myMessage}
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
                            p-2
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
