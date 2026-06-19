import Chat from "./Chat";
import { useEffect, useState } from "react";
import Frame from "../../components/Frame";
import Avatar from "./Avatar";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Login(props) {
    const [loggedIn, setLoggedIn] = useState(props.loggedIn);
    const [roomID, setRoomID] = useState(null);
    const [nick, setNick] = useState("");

    // Ensure page never has navbar
    useEffect(() => {
        props.setData({
            ...props.data,
            noNavbar: true,
        });
    }, []);

    const message = {
        from: {
            nick: "John Human",
            id: "rXKIunbHtTsbGTgsU62C",
        },
        content: "Try setting a nickname to preview your user icon",
        timestamp: "1/4/2025, 11:04:14 AM",
    };

    function createLogin(props) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-dvh flex-col justify-center gap-8"
            >
                <div className="mb-12 flex max-w-screen-sm flex-col justify-center gap-8 max-xs:pt-[50%]">
                    {/* Choose room */}
                    <motion.div
                        layoutId="ChatGradientBackground"
                        className="lit-section lit-section-warm m-auto mt-3 flex w-full flex-col justify-center gap-3 rounded-3xl p-5 shadow-xl max-sm:max-w-xs"
                    >
                        <p className="m-auto font-header text-5xl font-extralight text-lighten-900">
                            p2p chat
                        </p>
                        <p className="font-header text-xl font-medium text-lighten-700">
                            Choose a room
                        </p>
                        <motion.div className="flex justify-center gap-2">
                            {createRoomButton("A")}
                            {createRoomButton("B")}
                            {createRoomButton("C")}
                            {createRoomButton("D")}
                        </motion.div>
                    </motion.div>
                    <div className="-mt-6 flex w-full flex-wrap gap-2 transition-all">
                        {/* Set nickname */}
                        <div className="lit-card m-auto flex max-w-sm gap-2 rounded-3xl p-2">
                            <Avatar nick={nick} />
                            <input
                                className="lit-input w-full rounded-full p-2 pl-3 shadow-inner"
                                placeholder="Nickname (optional)"
                                onChange={(e) => setNick(e.target.value)}
                            />
                        </div>
                        {/* Create custom room */}
                        <div className="lit-card m-auto flex flex-col gap-2 rounded-3xl p-2">
                            <div className="flex gap-2 ">
                                <input
                                    className="lit-input w-full rounded-full p-2 pl-3 shadow-inner"
                                    placeholder="Custom room name"
                                    onChange={(e) => setRoomID(e.target.value)}
                                />
                                <button
                                    onClick={() => roomID && joinRoom(roomID)}
                                    className="lit-control h-10 w-12 rounded-full font-header text-darken-700"
                                >
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* FAKE MESSAGE */}
                    <div
                        key={message.from.id}
                        className="lit-card justify-left flex-0 flex justify-between gap-2 overflow-y-auto overflow-x-scroll rounded-3xl px-4 py-2 opacity-0 scrollbar-hide sm:opacity-100"
                    >
                        {message.from.nick && (
                            <div className="flex max-h-8">
                                <div className="my-auto flex flex-col justify-center overflow-hidden">
                                    <div className="pt-2">
                                        <Avatar nick={message.from.nick} />
                                    </div>
                                </div>

                                <p className="max-w-36 text-ellipsis whitespace-nowrap text-nowrap text-left text-lg font-semibold text-darken-800 scrollbar-hide max-sm:text-sm">
                                    <div className="pt-3">
                                        {message.from.nick}
                                    </div>
                                </p>
                            </div>
                        )}
                        <div className="my-auto max-h-96 flex-1 overflow-scroll text-left text-lg text-darken-800 scrollbar-hide max-sm:text-sm">
                            <Markdown>{message.content}</Markdown>
                        </div>
                        {/* User ID and Time are hidden on small displays */}
                        <div className="flex-0 flex h-full flex-col justify-center max-sm:hidden">
                            <p className="text-sm text-darken-500">
                                {message.timestamp.toLocaleString()}
                            </p>
                            <p className="text-xs text-darken-500">
                                {message.from.id}
                            </p>
                        </div>
                    </div>

                    {/* ABOUT SECTION */}
                    <p className="m-auto max-w-xs text-sm text-darken-600">
                        Messages are end-to-end encrypted and{" "}
                        <span className="text-red-500">
                            completely ephemeral
                        </span>
                        . Your messages are sent peer-to-peer using a protocol
                        which you can learn more about{" "}
                        <a
                            className="font-semibold underline"
                            href="https://github.com/dmotz/trystero"
                        >
                            here
                        </a>
                        .
                    </p>

                    <Link
                        to="/fun"
                        className="p-2 text-darken-700 underline"
                    >
                        more experiments
                    </Link>
                </div>
            </motion.div>
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
                className="lit-control flex aspect-square h-16 cursor-default flex-col justify-center rounded-xl p-2 shadow-md backdrop-blur-md"
            >
                <p className="font-header text-3xl text-current">{roomID}</p>
            </button>
        );
    }

    return (
        <AnimatePresence mode="wait">
            {loggedIn ? (
                <Chat
                    nick={nick}
                    roomID={roomID}
                />
            ) : (
                createLogin()
            )}
        </AnimatePresence>
    );
}
