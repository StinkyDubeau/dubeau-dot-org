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
            <div className="scale-100 text-white transition-all hover:scale-110 hover:text-darken-300">
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
                <div className="w-xl flex flex-col gap-6">
                    <div className="mt-5 flex gap-12 overflow-clip rounded-3xl bg-white p-2">
                        <div className="flex-0 flex max-w-96 justify-center p-2">
                            <div className="flex flex-col justify-center gap-12 align-middle">
                                <div className="flex flex-col gap-2">
                                    <p className="text-center font-header text-5xl text-darken-800">
                                        Vanilla
                                    </p>

                                    <p className="text-center text-xl font-light text-darken-800">
                                        An invite-only 1.21 minecraft community,
                                    </p>
                                    <p className="text-center text-xl font-light text-darken-800">
                                        there are currently{" "}
                                        <span className="drop-shadow">
                                            {whitelist.length}
                                        </span>{" "}
                                        players whitelisted.
                                    </p>
                                    <div className="flex w-full justify-center">
                                        <div className="flex max-w-96 justify-center">
                                            <Marquee
                                                speed="150"
                                                className="mt-6 w-full overflow-clip"
                                            >
                                                {whitelist.map(createUser)}
                                            </Marquee>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            className="w-52 flex-1 rounded-3xl"
                            src={PackImg}
                        />
                    </div>
                    {/* Gradient bg */}
                    <p className="rounded-full bg-red-500 p-2 font-header text-lighten-800">
                        Please note that you must visit our{" "}
                        <Link
                            className="font-regular text-lighten-600 underline"
                            to="/contact"
                        >
                            discord
                        </Link>{" "}
                        to join with either method.
                    </p>
                    <div className="rounded-3xl bg-lighten-800 p-4">
                        <p className="text-left font-header text-3xl text-darken-800">
                            Vanilla
                        </p>

                        <p className="text-left font-header text-xl text-darken-800">
                            0. Connect with us on{" "}
                            <span className=" scale-100 transition-all hover:scale-125">
                                <Link
                                    className="font-bold text-darken-800"
                                    to="/contact"
                                >
                                    discord
                                </Link>{" "}
                            </span>
                            to be whitelisted.
                        </p>

                        <p className="text-left font-header text-xl text-darken-800">
                            1. Launch the latest version of Minecraft Java
                            Edition.
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            2. Connect to{" "}
                            <span className="font-light text-red-500">
                                dubeau.ddns.net
                            </span>
                        </p>

                        <p className="text-left font-header text-xl text-darken-800">
                            3. Have fun and be cool! Follow posted signs for
                            general rules.
                        </p>
                    </div>
                    <div className="rounded-3xl bg-lighten-800 p-4">
                        <p className="text-left font-header text-3xl text-darken-800">
                            Modded Client
                        </p>

                        <p className="text-left font-header text-xl text-darken-800">
                            1. Download our official{" "}
                            <span className="font-light text-red-500">
                                MultiMC instance
                            </span>
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
