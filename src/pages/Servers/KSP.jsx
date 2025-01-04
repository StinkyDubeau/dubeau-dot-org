import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import PackImg from "../../assets/ksp-banner.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function fun(props) {
    return (
        <Frame data={props.data}>
            <motion.div layoutId={PackImg}>
                <div className="w-xl flex flex-col justify-center gap-6">
                    <div className="mt-5 flex justify-between gap-12 overflow-clip rounded-3xl align-middle max-sm:flex-col">
                        <div className="flex-0 flex max-w-full justify-center ">
                            <div className="flex flex-col justify-center gap-12 align-middle">
                                <div className="flex flex-col gap-2">
                                    <p className="text-left font-header text-5xl text-darken-800 max-md:text-center">
                                        Kerbal Space Program
                                    </p>

                                    <p className="text-left text-xl font-light text-darken-800 max-md:text-center">
                                        A public Dark Mulitplayer server for
                                        Kerbal Space program.
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
                            Join with steam
                        </p>
                        <p className="text-left font-header font-light text-darken-800">
                            This section of the site is under construction. Join
                            the discord to learn how to join this server.
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
                    </div>

                    <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4">
                        <p className="text-left font-header text-3xl text-darken-800">
                            Join with server IP
                        </p>
                        <p className="text-left font-header font-light text-darken-800">
                            This section of the site is under construction. Join
                            the discord to learn how to join this server.
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
                    </div>
                </div>
                <p className="mt-6 font-header text-darken-800">
                    Last updated September 5th, 2024
                </p>
            </motion.div>
        </Frame>
    );
}
