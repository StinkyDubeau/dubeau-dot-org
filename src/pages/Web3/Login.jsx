import Chat from "./Chat";
import { useState } from "react";
import Frame from "../../components/Frame";
import Avatar from "./Avatar";

export default function Login(props) {
    const [loggedIn, setLoggedIn] = useState(props.loggedIn);
    const [appID, setAppID] = useState(null);
    const [roomID, setRoomID] = useState(null);
    const [nick, setNick] = useState("");

    function createLogin(props) {
        return (
            <div className="flex max-w-sm flex-col gap-2">
                {nick ? (
                    <p className="m-auto text-xl text-darken-800">
                        Hello, {nick}
                    </p>
                ) : (
                    <p className="m-auto text-sm text-darken-800 sm:text-lg">
                        Messages are end-to-end encrypted and{" "}
                        <span className="text-red-500">
                            completely ephemeral
                        </span>
                        . Your messages are sent peer-to-peer using a bittorrent
                        WebRTC protocol, which you can learn more about{" "}
                        <a
                            className="font-semibold underline"
                            href="https://oxism.com/trystero/"
                        >
                            here
                        </a>
                        .
                    </p>
                )}

                <div className="flex gap-2 rounded-3xl bg-lighten-800 p-2">
                    <Avatar nick={nick} />
                    <input
                        className="w-full rounded-full bg-darken-50 p-2 pl-3 text-darken-800 shadow-inner"
                        // value={nick}
                        placeholder="Nickname (optional)"
                        onChange={(e) => setNick(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-2">
                    <p className="text-xl text-darken-800">Choose a lobby</p>
                    <div className="flex justify-center gap-2">
                        {createRoomButton("A")}
                        {createRoomButton("B")}
                        {createRoomButton("C")}
                        {createRoomButton("D")}
                    </div>
                </div>
                <p className="m-auto text-xl text-darken-800">or</p>
                <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-2">
                    <p className="text-xl text-darken-800">
                        Join a custom room
                    </p>
                    <div className="flex gap-2">
                        <input
                            className="w-full rounded-full bg-darken-50 p-2 pl-3 text-darken-800 shadow-inner"
                            // value={nick}
                            placeholder="Room name (e.g. '934dmo232fnm"
                            onChange={(e) => setNick(e.target.value)}
                        />
                        <button className="h-10 w-12 rounded-full bg-darken-50 text-darken-600 transition-all hover:bg-darken-100">
                            Go
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    function joinRoom(roomID) {
        console.log(`Joining room '${roomID}'`);
        setRoomID(roomID);
        setLoggedIn(true);
    }

    function createRoomButton(roomID) {
        return (
            <button
                onClick={() => joinRoom(roomID)}
                className="h-24 w-24 rounded-3xl bg-darken-50"
            >
                <p className="font-header text-3xl text-darken-600">{roomID}</p>
            </button>
        );
    }

    return (
        <Frame data={props.data}>
            {loggedIn ? <Chat nick={nick} roomID={roomID} /> : createLogin()}
        </Frame>
    );
}
