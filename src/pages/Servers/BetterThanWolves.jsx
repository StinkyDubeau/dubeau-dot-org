import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import PackImg from "../../assets/beta-banner.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function fun(props) {
    const addr = "mc.dubeau.org:25575";
    const name = "Better than Wolves";
    const desc = 'A challenging "back-to-beta" modpack.';

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

                        <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                            {/* Public server warning */}
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
                                    This server is not whitelisted and does not
                                    have formal rules. Anybody can join. Anyboy
                                    can grief you.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                            {/* Hardcore warning */}
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
                                    This server uses a fake "hardcore mode".
                                    Every time you die, you will spawn in a new,
                                    random, location. But, the sequence of spawn
                                    locations is synced for all players.
                                    <br />
                                    <i>
                                        For example, every player will spawn
                                        near (2300, -2000) after their fifth
                                        death.
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4 text-darken-800">
                        <p className="text-left font-header text-3xl">
                            Join with MultiMC
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            0. Connect with us on discord for support:
                        </p>
                        <div className="justify-left flex gap-4 font-header text-darken-800 underline">
                            <Link
                                className=" scale-100 transition-all hover:scale-110"
                                to="/contact"
                            >
                                Join the discord server
                            </Link>
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
                                className="scale-100 transition-all hover:scale-110"
                                to="https://files.multimc.org/downloads/mmc-develop-osx64.tar.gz"
                            >
                                MacOS
                            </Link>
                        </div>
                        <p className="text-left font-header text-xl text-darken-800">
                            2. Download Better Than Wolves:
                        </p>
                        <div className="justify-left flex gap-4 font-header text-darken-800 underline">
                            <Link
                                className="scale-100 transition-all hover:scale-110"
                                to="https://github.com/BTW-Community/cursed-fabric-loader/releases"
                            >
                                Download MultiMC Instance
                            </Link>
                        </div>
                        <p className="text-left font-header text-xl text-darken-800">
                            3. Connect your Microsoft account to MultiMC by
                            clicking "Manage Accounts" in the top-right corner
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            4. Click "Add instance", and then import the ZIP
                            folder you downloaded in step 2
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            5. Launch the new instance and connect to{" "}
                            <span className="font-light text-red-500">
                                mc.dubeau.org:25575
                            </span>
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            6. Have fun and don't die!
                        </p>
                    </div>
                </div>
                <p className="mt-6 font-header text-darken-800">
                    Last updated September 5th, 2024
                </p>
            </motion.div>
        </Frame>
    );
}
