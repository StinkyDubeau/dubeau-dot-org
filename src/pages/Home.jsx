import Frame from "../components/Frame";
import Panel from "../components/Panel";
import NavButtons from "../components/NavButtons";

import { motion } from "framer-motion";

export default function Home(props) {
    return (
        <div>
            <Frame
                data={props.data}
                noNavbar
            >
                <div className="flex h-screen flex-col justify-center gap-4">
                    <Panel className="">
                        <div className="flex justify-center py-8 sm:p-12">
                            <h1 className="font-header text-5xl font-light tracking-tighter text-darken-700 max-sm:text-5xl">
                                dubeau.org
                            </h1>
                            {/* <div className="flex flex-col justify-center text-2xl italic text-darken-500 max-sm:text-2xl">
                            dot
                        </div>
                        <h1 className="font-headerScript text-6xl text-darken-700 max-sm:text-5xl">
                        org
                    </h1> */}
                        </div>
                    </Panel>
                    <Panel className="">
                        <div className="flex justify-center gap-2">
                            <motion.div
                                layoutId="NavButtons"
                                layoutScroll
                                className="m-2 flex h-16 justify-center p-1  sm:w-96"
                            >
                                <NavButtons />
                            </motion.div>
                        </div>
                    </Panel>
                </div>
            </Frame>
        </div>
    );
}
