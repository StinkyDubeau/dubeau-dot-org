import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import PackImg from "../../assets/modded-banner.png";
import { Link } from "react-router-dom";
import wl from "../../assets/whitelist.json";
import Marquee from "react-fast-marquee";
import Markdown from "react-markdown";

export default function fun(props) {
    const whitelist = wl;

    function createUser(user) {
        return (
            <div className="scale-100 text-darken-10 transition-all hover:scale-110 hover:text-darken-800">
                <p className="font-pixel text-lg text-blue-800">{user.name}</p>
                <p className="font-header text-xs font-light">{user.uuid}</p>
            </div>
        );
    }

    return (
        <Frame data={props.data}>
            <div className="m-2 flex flex-col justify-center gap-6 overflow-hidden max-sm:mt-12 sm:p-4">
                <div className="flex justify-between gap-12 overflow-clip align-middle max-sm:relative max-sm:h-72 max-sm:flex-col sm:h-72">
                    <div className="flex-0  z-10 flex max-w-full justify-center max-sm:h-full">
                        <div className="my-auto flex h-fit flex-col justify-center gap-12 align-middle">
                            <div className="flex flex-col gap-2">
                                <p className="text-left font-header text-5xl text-darken-700 max-md:text-center max-sm:text-lighten-800">
                                    Modded Server, Fall 2024
                                </p>

                                <p className="max-sm:h-shrink text-left text-xl font-light text-darken-700 max-md:text-center max-sm:text-lighten-800">
                                    A whitelisted Create and Pixelmon server
                                    ⚙️🐿️
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        className="top-0 z-0 flex-1 rounded-3xl object-cover max-sm:absolute max-sm:h-full max-sm:w-full max-sm:brightness-75 sm:w-96"
                        src={PackImg}
                    />
                </div>

                <div className="flex flex-grow justify-between gap-6 max-sm:flex-wrap">
                    {/* Warnings */}

                    <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                        {/* Pre-release warning */}
                        <div
                            id="container"
                            className="flex gap-4"
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
                                This server is currently in pre-release. The
                                world file is temporary, and all users have been
                                granted{" "}
                                <span className="font-pixel">moderator</span>{" "}
                                status.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                        {/* Whitelist warning */}
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
                                At release, only whitelisted players will be
                                allowed to access this server. Message an{" "}
                                <span className="font-pixel">admin</span> if you
                                haven't already been whitelisted.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                    <p className="text-left font-header text-3xl text-darken-800">
                        How to join
                    </p>
                    <div
                        id="pros cons"
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <div className="flex w-full max-w-screen-lg flex-col gap-2 rounded-2xl bg-blue-600 p-4 shadow-xl">
                            <p className="m-auto max-w-lg text-center font-header font-light text-lighten-800">
                                There's an official modpack for most desktop
                                platforms.
                            </p>
                            <div className="flex justify-center gap-2 text-white">
                                <Link
                                    className=" scale-100 transition-all hover:scale-110"
                                    to="https://files.multimc.org/downloads/mmc-develop-win32.zip"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-microsoft"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
                                    </svg>
                                </Link>
                                <Link
                                    className=" scale-100 transition-all hover:scale-110"
                                    to="https://files.multimc.org/downloads/mmc-develop-osx64.tar.gz"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-apple"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                    </svg>
                                </Link>
                                <Link
                                    className=" scale-100 transition-all hover:scale-110"
                                    to="https://files.multimc.org/downloads/multimc_1.6-1.deb"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-ubuntu"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2.273 9.53a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.547Zm9.467-4.984a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546M7.4 13.108a5.54 5.54 0 0 1-3.775-2.88 3.27 3.27 0 0 1-1.944.24 7.4 7.4 0 0 0 5.328 4.465c.53.113 1.072.169 1.614.166a3.25 3.25 0 0 1-.666-1.9 6 6 0 0 1-.557-.091m3.828 2.285a2.273 2.273 0 1 0 0-4.546 2.273 2.273 0 0 0 0 4.546m3.163-3.108a7.44 7.44 0 0 0 .373-8.726 3.3 3.3 0 0 1-1.278 1.498 5.57 5.57 0 0 1-.183 5.535 3.26 3.26 0 0 1 1.088 1.693M2.098 3.998a3.3 3.3 0 0 1 1.897.486 5.54 5.54 0 0 1 4.464-2.388c.037-.67.277-1.313.69-1.843a7.47 7.47 0 0 0-7.051 3.745" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <p className="text-left font-header text-xl text-darken-800">
                        1. Download the MultiMC launcher for your system:
                    </p>
                    <div className="justify-left flex gap-4 font-header text-darken-800 underline">
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://files.multimc.org/downloads/mmc-develop-win32.zip"
                        >
                            Windows
                        </Link>
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://files.multimc.org/downloads/multimc_1.6-1.deb"
                        >
                            Debian/Ubuntu
                        </Link>
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://github.com/MultiMC/multimc-pkgbuild"
                        >
                            Arch
                        </Link>
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://files.multimc.org/downloads/mmc-develop-osx64.tar.gz"
                        >
                            MacOS
                        </Link>
                    </div>
                    <p className="text-left font-header text-xl text-darken-800">
                        2. Download our official MultiMC instance
                    </p>
                    <div className="justify-left flex gap-4 font-header text-darken-800 underline">
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://cdn.modrinth.com/data/TK1lQFH6/versions/PXU2pZT5/Create%20%26%20Explore%20-%20pre2.1.0.mrpack"
                        >
                            dubeau.org modpack v0.1
                        </Link>
                    </div>
                    <p className="text-left font-header text-xl text-darken-800">
                        3. Connect your Microsoft account by clicking "Manage
                        Accounts" in the top-right corner of MultiMC
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        4. Click "Add instance", and then import the ZIP folder
                        you downloaded in step 2
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        5. Launch the new instance and connect to{" "}
                        <span className="font-pixel text-blue-600">
                            mc.dubeau.org
                        </span>
                    </p>
                    <p className="text-left font-header text-xl font-light text-darken-800">
                        6. <span className="underline">Optional</span>: For the
                        best experience, temporarily set your render distance to
                        32 chunks and do some exploring. All terrain that you
                        generate will stay within your render distance even if
                        you set your render distance to something low. 16 chunks
                        if a good place to start.
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        7. Have fun and be cool! Follow posted signs for general
                        rules
                    </p>
                </div>

                <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4">
                    <p className="text-left font-header text-3xl text-darken-800">
                        Extra information
                    </p>

                    <p className="text-left font-header text-xl text-darken-800">
                        There are currently{" "}
                        <span className="font-pixel text-blue-600">
                            {whitelist.length}
                        </span>{" "}
                        players whitelisted.
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        World Seed{" "}
                        <span className="font-pixel text-blue-600">
                            -3185478975619901032
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        Spawn Generation{" "}
                        <span className="font-pixel text-blue-600">
                            Vanilla 1.20.4
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        Render distance{" "}
                        <span className="font-pixel text-blue-600">
                            24 chunks
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        Simulation distance{" "}
                        <span className="font-pixel text-blue-600">
                            16 chunks
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        Whitelisted players, hover to see their UUIDs
                        <div className="flex w-full justify-center">
                            <div className="flex w-12 flex-1 justify-center text-center">
                                <Marquee
                                    speed="150"
                                    className="mt-6 w-full overflow-clip"
                                >
                                    {whitelist.map(createUser)}
                                </Marquee>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
            <p className="mb-6 text-xl font-light text-darken-700 max-md:text-center">
                Last updated October 19th, 2024
            </p>
        </Frame>
    );
}
