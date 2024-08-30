import Chat from "./Chat";
import { useState } from "react";
import Frame from "../../components/Frame";
import Avatar from "./Avatar";

export default function Login(props) {
    const [loggedIn, setLoggedIn] = useState(props.loggedIn);
    const [roomID, setRoomID] = useState(null);
    const [nick, setNick] = useState("");

    function createLogin(props) {
        return (
            <div className="flex flex-col gap-2">
                {/* Choose lobby */}
                <div className="m-auto mt-3 flex w-full animate-gradient-y flex-col justify-center gap-2 rounded-3xl bg-gradient-to-bl from-gray-700 via-cyan-600 to-blue-500 p-5">
                    <p className="m-auto font-header text-5xl font-extralight text-lighten-900">
                        p2p chat
                    </p>
                    <p className="font-header text-xl font-medium text-lighten-700">
                        Choose a lobby
                    </p>
                    <div className="flex justify-center gap-2">
                        {createRoomButton("A")}
                        {createRoomButton("B")}
                        {createRoomButton("C")}
                        {createRoomButton("D")}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {/* Set nickname */}
                    <div className="m-auto flex max-w-sm gap-2 rounded-3xl bg-lighten-800 p-2">
                        <Avatar nick={nick} />
                        <input
                            className="w-full rounded-full bg-darken-50 p-2 pl-3 text-darken-800 shadow-inner"
                            placeholder="Nickname (optional)"
                            onChange={(e) => setNick(e.target.value)}
                        />
                    </div>
                    {/* Create custom room */}
                    <div className="max-w- m-auto flex flex-col gap-2 rounded-3xl bg-lighten-800 p-2">
                        <div className="flex gap-2">
                            <input
                                className="w-full rounded-full bg-darken-50 p-2 pl-3 text-darken-800 shadow-inner"
                                placeholder="Custom room name"
                                onChange={(e) => setRoomID(e.target.value)}
                            />
                            <button
                                onClick={() => roomID && joinRoom(roomID)}
                                className="h-10 w-12 rounded-full bg-darken-50 font-header text-darken-600 transition-all hover:bg-darken-100"
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                <p className="m-auto max-w-xs text-sm text-darken-600">
                    Messages are end-to-end encrypted and{" "}
                    <span className="text-red-500">completely ephemeral</span>.
                    Your messages are sent peer-to-peer using a bittorrent
                    WebRTC protocol, which you can learn more about{" "}
                    <a
                        className="font-semibold underline"
                        href="https://oxism.com/trystero/"
                    >
                        here
                    </a>
                    .
                </p>
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
                className="flex aspect-square h-16 flex-col justify-center rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-darken-200 p-2 shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-lg"
            >
                <p className="font-header text-3xl text-lighten-700">
                    {roomID}
                </p>
            </button>
        );
    }

    return (
        <Frame noNavbar data={props.data}>
            {loggedIn ? (
                <Chat
                    nick={nick}
                    roomID={roomID}
                />
            ) : (
                createLogin()
            )}
        </Frame>
    );
}
