import Chat from "./Chat";
import { useEffect, useState } from "react";
import Frame from "../../components/Frame";
import { RandomAvatar } from "react-random-avatars";

export default function Login(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [appID, setAppID] = useState(null);
    const [roomID, setRoomID] = useState(null);
    const [nick, setNick] = useState("nutesdsssfdasdfasdfd");

    function createLogin(props) {
        return (
            <div>
                {nick ? (
                    <p>Hello, {nick}</p>
                ) : (
                    <p>Hello. Type a username to begin.</p>
                )}

                <div className="flex gap-2 rounded-3xl bg-lighten-800 p-2">
                    {useEffect(<RandomAvatar name={nick} />, [nick])}
                    <input
                        className="w-full rounded-full bg-darken-50 p-2 text-darken-800 shadow-inner"
                        // value={nick}
                        placeholder="Message"
                        onChange={(e) => setNick(e.target.value)}
                    />
                </div>
            </div>
        );
    }

    function createRoomButton(roomID) {
        return <button className="h-24 w-24 rounded-3xl bg-darken-50"></button>;
    }

    return (
        <Frame data={props.data}>
            {loggedIn ? <Chat nick={nick} roomID={roomID} /> : createLogin()}
        </Frame>
    );
}
