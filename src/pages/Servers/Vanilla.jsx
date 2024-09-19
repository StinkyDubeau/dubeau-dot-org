import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import PackImg from "../../assets/dubeau-banner.png";
import { Link } from "react-router-dom";
import wl from "../../assets/whitelist.json";
import Marquee from "react-fast-marquee";

export default function fun(props) {
    const whitelist = wl;

    function createUser(user) {
        return (
            <div className="scale-100 text-darken-10 transition-all hover:scale-110 hover:text-darken-800">
                <p className="font-header text-lg text-darken-800">
                    {user.name}
                </p>
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
                                    Vanilla
                                </p>

                                <p className="max-sm:h-shrink text-left text-xl font-light text-darken-700 max-md:text-center max-sm:text-lighten-800">
                                    An invite-only Minecraft community
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        className="top-0 z-0 flex-1 rounded-3xl object-cover max-sm:absolute max-sm:h-full max-sm:brightness-75 sm:w-96"
                        src={PackImg}
                    />
                </div>

                <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                    <p className="text-left font-header text-3xl text-darken-800">
                        Join with a vanilla client
                    </p>
                    <div
                        id="pros cons"
                        className="flex flex-wrap justify-center gap-2"
                    >
                        <div className="flex-grow rounded-full bg-green-600 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Easy to set up
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-green-600 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Works on most PCs
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-red-500 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Missing social features
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-red-500 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Worse graphics
                            </p>
                        </div>
                    </div>

                    <p className="text-left font-header text-xl text-darken-800">
                        0. Connect with us on discord to be whitelisted
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
                        1. Download and launch the latest version of Minecraft
                        Java Edition
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        2. Connect to{" "}
                        <span className="font-light text-red-500">
                            dubeau.ddns.net
                        </span>
                    </p>

                    <p className="text-left font-header text-xl text-darken-800">
                        3. Have fun and be cool! Follow posted signs for general
                        rules
                    </p>
                </div>

                <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                    <p className="text-left font-header text-3xl text-darken-800">
                        Join with a modded client
                    </p>
                    <div
                        id="pros cons"
                        className="flex flex-wrap justify-center gap-2"
                    >
                        <div className="flex-grow rounded-full bg-green-600 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Infinite render distance
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-green-600 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Built-in shaders
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-red-500 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Higher system requirements
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-red-500 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Harder to set up
                            </p>
                        </div>
                    </div>
                    <p className="text-left font-header text-xl text-darken-800">
                        0. Connect with us on discord for support and
                        whitelisting
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
                            to="https://files.multimc.org/downloads/mmc-develop-win32.zip"
                        >
                            dubeau.org MultiMC Instance Fall 2024
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
                        <span className="font-light text-red-500">
                            dubeau.ddns.net
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        6. <span className="font-light">(Optional)</span> For
                        the best experience, temporarily set your render
                        distance to 32 chunks, and do some exploring. All
                        terrain that you generate will stay within your render
                        distance even if you set your render distance to
                        something low.{" "}
                        <span className="font-light">
                            (16 chunks recommended.)
                        </span>
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
                        <span className="font-light text-red-500">
                            {whitelist.length}
                        </span>{" "}
                        players whitelisted.
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        World Seed{" "}
                        <span className="font-light text-red-500">
                            -3185478975619901032
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        Spawn Generation{" "}
                        <span className="font-light text-red-500">
                            Vanilla 1.20.4
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        Render distance{" "}
                        <span className="font-light text-red-500">
                            32 chunks
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        Simulation distance{" "}
                        <span className="font-light text-red-500">
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
                Last updated September 19th, 2024
            </p>
        </Frame>
    );
}
