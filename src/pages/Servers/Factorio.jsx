import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import PackImg from "../../assets/factorio-banner.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";

export default function fun(props) {
    const addr = "factorio.dubeau.org";
    const name = "Factorio";
    const desc = "Modded 2.0";

    return (
        <Frame data={props.data}>
            <motion.div
                layoutId={PackImg}
                className="m-2 flex flex-col justify-center gap-6 overflow-hidden max-sm:mt-12 sm:p-4"
            >
                <div className="flex justify-between gap-12 overflow-clip align-middle max-sm:relative max-sm:h-72 max-sm:flex-col sm:h-72">
                    <div className="flex-0  z-10 flex max-w-full justify-center max-sm:h-full">
                        <div className="my-auto flex h-fit flex-col justify-center gap-12 align-middle">
                            <div className="flex flex-col gap-2">
                                <p className="text-left font-header text-5xl text-darken-700 max-md:text-center max-sm:text-lighten-800">
                                    {name}
                                </p>
                                <p className="max-sm:h-shrink text-left text-xl font-light text-darken-700 max-md:text-center max-sm:text-lighten-800">
                                    {desc}
                                </p>
                                <button
                                    className="max-sm:h-shrink flex gap-2 text-nowrap text-left text-xl font-light text-darken-700 max-md:text-center max-sm:mx-auto max-sm:text-lighten-800"
                                    onClick={() => {
                                        navigator.clipboard.writeText(addr);
                                    }}
                                >
                                    <p>
                                        Join at{" "}
                                        <span className="rounded-xl bg-lighten-800 p-2 text-darken-800">
                                            {addr}
                                        </span>
                                    </p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="my-auto transition-all hover:scale-105 active:scale-95"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <img
                        className="top-0 z-0 flex-1 rounded-3xl object-cover max-sm:absolute max-sm:h-full max-sm:w-full max-sm:brightness-75 sm:w-96"
                        src={PackImg}
                    />
                </div>

                <div className="w-xl flex flex-col justify-center gap-6">
                    <div className="flex flex-grow justify-between gap-6 max-sm:flex-wrap">
                        {/* Warnings */}
                        <div className="flex w-full flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                            {/* DLC warning */}
                            <div
                                id="container"
                                className="flex h-full gap-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    fill="text-darken-700"
                                    className="bi bi-exclamation-diamond h-full w-1/4 max-w-12"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
                                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
                                </svg>
                                <p className="text-left font-header text-darken-800">
                                    This server requires the Factorio: Space Age
                                    DLC to join.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                            {/* Publicity warning */}
                            <div
                                id="container"
                                className="flex gap-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    fill="text-darken-700"
                                    className="bi bi-person-lock h-full w-1/4 max-w-12"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                                </svg>
                                <p className="text-left font-header text-darken-800">
                                    Although referrals are required to join,
                                    they are easily granted via Steam friends.
                                    The server is not actively moderated;
                                    message an{" "}
                                    <span className="rounded-lg bg-blue-600 p-1 font-header font-light text-lighten-800 shadow">
                                        admin
                                    </span>{" "}
                                    on discord to report misbehaviour.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4 text-darken-800">
                        <p className="text-left font-header text-3xl">
                            Join via server IP
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            0. Gain access to the server by either (a) joining
                            via an already-allowed stream friend or (b) joining{" "}
                            <a href="/contact"> our discord</a>.
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            1. Launch Factorio with the Space Age DLC installed.
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            2. From the main menu, choose "Multiplayer", and
                            then "Connect to address"
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            3. The server rules will be displayed in the chat
                            the first time you join. Follow them and have fun!
                        </p>
                        <p className="text-left font-header text-xl italic text-darken-800">
                            ... To join next time, choose "Public servers" from
                            the multiplayer menu. You will see your
                            recently-played servers at the top of the list.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4 text-darken-800">
                        <p className="text-left font-header text-3xl">
                            Join via a steam friend
                        </p>
                        <p className="text-left font-header text-xl italic text-darken-800">
                            * Your friend must actively be on the Factorio
                            server to use this method.
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            1. In Steam, click "Friends", and then "View Friends
                            List".
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            2. Right-click on your friends profile picture and
                            choose "Join Game"
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            3. The server rules will be displayed in the chat
                            the first time you join. Follow them and have fun!
                        </p>
                        <p className="text-left font-header text-xl italic text-darken-800">
                            ... To join next time, choose "Public servers" from
                            the multiplayer menu. You will see your
                            recently-played servers at the top of the list.
                        </p>
                    </div>
                </div>
                <p className="mt-6 font-header text-darken-800">
                    Last updated Janurary 4th, 2025
                </p>
            </motion.div>
        </Frame>
    );
}
