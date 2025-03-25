import Frame from "../components/Frame";
import Panel from "../components/Panel";
import NavButtons from "../components/NavButtons";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home(props) {
    useEffect(() => {
        props.data && props.setData({ ...props.data, noNavbar: true });
    }, []);

    return (
        <motion.div layout>
            <div className="flex h-screen flex-col justify-center gap-4">
                <Panel className="max-sm:w-full">
                    <div className="flex flex-col justify-center py-8 sm:p-12">
                        <h1 className="font-header text-5xl font-light tracking-tighter text-darken-700 max-sm:text-5xl">
                            dubeau.org
                        </h1>
                        <p className="font-header text-darken-700">
                            jake's web playground
                        </p>
                    </div>
                </Panel>
                <div className="flex justify-center gap-2">
                    <Panel className="">
                        <div className="m-2 flex h-16 justify-center p-1">
                            <Link
                                className="m-1 rounded-xl p-1 font-header text-2xl text-darken-700 transition-all hover:rounded-3xl hover:bg-darken-50 hover:px-3 hover:shadow"
                                to="/chat"
                            >
                                <p className="mt-0.5 text-nowrap">p2p chat</p>
                            </Link>
                            <NavButtons noHome />
                        </div>
                    </Panel>
                </div>
            </div>
        </motion.div>
    );
}
