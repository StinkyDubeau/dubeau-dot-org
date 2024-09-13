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
            <div className="text-darken-10 scale-100 transition-all hover:scale-110 hover:text-darken-800">
                <p className="font-header text-lg text-darken-800">
                    {user.name}
                </p>
                <p className="font-header text-xs font-light">{user.uuid}</p>
            </div>
        );
    }

    return (
        <Frame data={props.data}>
            <div>
                <div className="max-sm:w-72 max-w-xl flex flex-col justify-center gap-6 overflow-hidden">
                    <div className="mt-5 flex justify-between gap-12 overflow-clip rounded-3xl align-middle max-sm:flex-col">
                        <div className="flex-0 flex max-w-full justify-center ">
                            <div className="flex flex-col justify-center gap-12 align-middle">
                                <div className="flex flex-col gap-2">
                                    <p className="text-left max-md:text-center font-header text-5xl text-darken-800">
                                        Vanilla
                                    </p>

                                    <p className="text-left max-md:text-center text-xl font-light text-darken-800">
                                        An invite-only 1.21 minecraft community
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="max-w-96 flex-1 rounded-3xl object-cover max-sm:max-w-full"
                            src={PackImg}
                        />
                    </div>

                    <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4">
                        <p className="text-left font-header text-3xl text-darken-800">
                            Join with a vanilla client
                        </p>
                        <p className="text-left font-header font-light text-darken-800">
                            A vanilla client is the easiest way to get started,
                            and is reccomended for most users.
                        </p>

                        <p className="text-left font-header text-xl text-darken-800">
                            0. Connect with us on discord to be whitelisted
                        </p>
                        <div className="flex justify-center gap-4 font-header text-darken-800 underline">
                            <Link
                                className=" scale-100 transition-all hover:scale-110"
                                to="/contact"
                            >
                                Join the discord server
                            </Link>
                        </div>

                        <p className="text-left font-header text-xl text-darken-800">
                            1. Launch the latest version of Minecraft Java
                            Edition
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            2. Connect to{" "}
                            <span className="font-light text-red-500">
                                dubeau.ddns.net
                            </span>
                        </p>

                        <p className="text-left font-header text-xl text-darken-800">
                            3. Have fun and be cool! Follow posted signs for
                            general rules
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4">
                        <p className="text-left font-header text-3xl text-darken-800">
                            Join with a modded client
                        </p>
                        <p className="text-left font-header font-light text-darken-800">
                            A modded client provides the best experience for
                            advanced users who desire longer render distances
                            and other amenities.
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            0. Connect with us on discord to be whitelisted
                        </p>
                        <div className="flex justify-center gap-4 font-header text-darken-800 underline">
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
                        <div className="flex justify-center gap-4 font-header text-darken-800 underline">
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
                        <div className="flex justify-center gap-4 font-header text-darken-800 underline">
                            <Link
                                className=" scale-100 transition-all hover:scale-110"
                                to="https://files.multimc.org/downloads/mmc-develop-win32.zip"
                            >
                                dubeau.org MultiMC Instance Fall 2024
                            </Link>
                        </div>
                        <p className="text-left font-header text-xl text-darken-800">
                            3. Connect your Microsoft account by clicking
                            "Manage Accounts" in the top-right corner of MultiMC
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            4. Click "Add instance", and then import the ZIP
                            folder you downloaded in step 2
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            5. Launch the new instance and connect to{" "}
                            <span className="font-light text-red-500">
                                dubeau.ddns.net
                            </span>
                        </p>{" "}
                        <p className="text-left font-header text-xl text-darken-800">
                            6. Have fun and be cool! Follow posted signs for
                            general rules
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
                                <div className="flex max-md:max-w-96 max-w-prose justify-center text-center">
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
            </div>
            <p className="mt-6 font-header text-darken-800">
                Last updated September 5th, 2024
            </p>
        </Frame>
    );
}
