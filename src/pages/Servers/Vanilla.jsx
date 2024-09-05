import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import PackImg from "../../assets/dubeau-banner.png";
import { Link } from "react-router-dom";
import wl from "../../assets/whitelist.json";

export default function fun(props) {
    const whitelist = wl;


    function createUser(user) {
        return (
            <>
                <p className="text-darken-800 font-header">{user.name}</p>
                <p className="text-darken-300 font-header font-light">{user.uuid}</p>
            </>
        );
    }

    return (
        <Frame data={props.data}>
            <div>
                <div className="w-xl flex flex-col gap-6">
                    <div className="mt-5">
                        <div className="flex justify-between gap-8 overflow-clip bg-blue-300">
                            <div  className="h-full bg-green-200">
                                <p className="text-left font-header text-5xl text-darken-800">
                                    Vanilla
                                </p>

                                <p className="text-left text-xl font-light text-darken-800">
                                    An <underline>invite-only</underline> 1.21
                                    minecraft community
                                </p>
                                <p className="text-left text-xl font-light text-darken-800">   
                                    There are currently <span className="drop-shadow">{whitelist.length}</span> players whitelisted.                                
                                </p>
                                <div className="rounded-2xl bg-red-300 max-h-fit">
                                    {whitelist.map(createUser)}
                                </div>
                            </div>
                            <div className="w-48 flex-1 overflow-clip">
                                <img
                                    className="w-full"
                                    src={PackImg}
                                />
                            </div>
                        </div>
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
                            Simply launch the latest version of Minecraft and
                            connect to{" "}
                            <span className="font-light text-red-500">
                                dubeau.ddns.net
                            </span>
                            . Follow posted signs for general rules.
                        </p>
                    </div>
                </div>
            </div>
            <p className="font-header text-darken-800">
                Last updated September 5th, 2024
            </p>
        </Frame>
    );
}
