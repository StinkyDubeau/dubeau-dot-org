import Frame from "../../components/Frame";
import { joinRoom } from "trystero";
import { useState } from "react";

export default function Astros(props) {
    // Handle user's input field
    const [input, setInput] = useState("");

    // App ID is unique to astro sightings
    const config = { appId: "astro_sightings" };
    // Join the "global" room
    const room = joinRoom(config, "global");

    room.onPeerJoin((peerID) => console.log(`${peerID} joined the room.`));
    room.onPeerLeave((peerID) => console.log(`${peerID} left the room.`));

    // Function to send message to peers
    const [sendMessage, getMessage] = room.makeAction("message");
    // State to store all messages in context
    const [messages, setMessages] = useState([]);

    // Listen for messages
    getMessage((data, peerID) => {
        console.log(`${peerID} said ${data}`);
        // Add message to our state
        setMessages([...messages, data]);
    });

    // Broadcast a message
    function sendMyMessage(message) {
        console.log(`Broadcasting: ${message}`);
        sendMessage({ text: message });
    }

    console.log(room.getPeers());

    function createMessage(message, index) {
        return (
            <div key={index}>
                <p>{message}</p>
            </div>
        );
    }

    function createChat(props) {
        return (
            <ul>
                <li>{messages.map(createMessage)}</li>
            </ul>
        );
    }

    return (
        <Frame>
            <p>Astro sightings is going web3, baby.</p>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => sendMyMessage(input)}>Send message</button>
        </Frame>
    );
}
