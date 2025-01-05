import Frame from "../components/Frame";
import Panel from "../components/Panel";
import NavButtons from "../components/NavButtons";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Home(props) {
    return (
        <motion.div layout>
            <Frame
                data={props.data}
                noNavbar
            >
                <div className="flex h-screen flex-col justify-center gap-4">
                    <Panel className="max-sm:w-full">
                        <div className="flex flex-col justify-center py-8 sm:p-12">
                            <h1 className="font-header text-5xl font-light tracking-tighter text-darken-700 max-sm:text-5xl">
                                dubeau.org
                            </h1>
                            <p>jake's web playground</p>
                        </div>
                    </Panel>
                    <div className="flex justify-center gap-2">
                        <Panel className="">
                            <div className="m-2 flex h-16 justify-center p-1  sm:w-96">
                                <Link
                                    className="m-1 -mr-2 rounded-xl p-1 font-header text-2xl text-darken-700 transition-all hover:rounded-3xl hover:bg-darken-50 hover:px-3 hover:shadow"
                                    to="/chat"
                                >
                                    <p className="mt-0.5 text-nowrap">
                                        p2p chat
                                    </p>
                                </Link>
                                <NavButtons noHome />
                            </div>
                        </Panel>
                    </div>
                </div>
            </Frame>
        </motion.div>
    );
}
