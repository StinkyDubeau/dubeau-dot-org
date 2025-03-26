import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import PackImg from "../../assets/beam-banner.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Markdown from "react-markdown";

export default function fun(props) {
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
        <motion.div
            layoutId={PackImg}
            className="m-2 flex flex-col justify-center gap-6 overflow-hidden max-sm:mt-12 sm:p-4"
        >
            <div className="flex justify-between gap-12 overflow-clip align-middle max-sm:relative max-sm:h-72 max-sm:flex-col sm:h-72">
                <div className="flex-0  z-10 flex max-w-full justify-center max-sm:h-full">
                    <div className="my-auto flex h-fit flex-col justify-center gap-12 align-middle">
                        <div className="flex flex-col gap-2">
                            <p className="text-left font-header text-5xl text-darken-700 max-md:text-center max-sm:text-lighten-800">
                                BeamNG.drive
                            </p>

                            <p className="max-sm:h-shrink text-left text-xl font-light text-darken-700 max-md:text-center max-sm:text-lighten-800">
                                BeamMP sessions with Automation support
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    id="beam"
                    className="top-0 z-0 flex-1 rounded-3xl object-cover max-sm:absolute max-sm:h-full max-sm:brightness-75 sm:w-96"
                    src={PackImg}
                />
            </div>

            <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4">
                <Markdown className="text-left font-header text-xl text-darken-800">
                    Sessions are invite-only. Join our discord for more
                    information.
                </Markdown>
                <Link
                    className="mx-auto rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-darken-700 p-2 shadow-md transition-all hover:scale-105 hover:shadow-lg"
                    to="https://discord.gg/53XsWtGFvB"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        className="fill-lighten-900 drop-shadow-lg"
                        viewBox="0 0 16 16"
                    >
                        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                    </svg>
                </Link>
            </div>
            <p className="mb-6 text-xl font-light text-darken-700 max-md:text-center">
                Last updated December 31st, 2024
            </p>
        </motion.div>
    );
}
