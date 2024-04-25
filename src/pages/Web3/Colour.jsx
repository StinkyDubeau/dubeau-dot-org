import { joinRoom } from "trystero";
import { useState } from "react";
import Frame from "../../components/Frame";

const trysteroConfig = { appId: "astro_sightings" };
const roomId = "global";

export default function Colour(props) {
    const room = joinRoom(trysteroConfig, roomId);
    const [sendColor, getColor] = room.makeAction("color");
    const [myColor, setMyColor] = useState("#c0ffee");
    const [peerColors, setPeerColors] = useState({});

    // whenever a new peer joins, send my color to them
    room.onPeerJoin((peer) => sendColor(myColor, peer));

    getColor((color, peer) =>
        setPeerColors((peerColors) => ({ ...peerColors, [peer]: color })),
    );

    const updateColor = (e) => {
        const { value } = e.target;

        setMyColor(value);
        // when updating my own color, broadcast it to all peers
        sendColor(value);
    };

    return (
        <Frame vignette data={props.data}>
            <div className="mt-12 flex max-w-lg flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                <h1>Trystero + React</h1>

                <h2>My color:</h2>
                <input type="color" value={myColor} onChange={updateColor} />

                <h2>Peer colors:</h2>
                <ul>
                    {Object.entries(peerColors).map(([peerId, color]) => (
                        <li key={peerId} style={{ backgroundColor: color }}>
                            {peerId}: {color}
                        </li>
                    ))}
                </ul>
            </div>
        </Frame>
    );
}
