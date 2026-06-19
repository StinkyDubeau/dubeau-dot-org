/* eslint-disable react/prop-types */
import NavButtons from "./NavButtons";
import GyroBevel from "./GyroBevel";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar(props) {
    // Run only if the parent Frame has props.data
    function createDataDependants() {
        return (
            <motion.div className="mx-auto w-min">
                <AnimatePresence>
                    {props.data && props.data.loading && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="flex w-full flex-col justify-center overflow-clip"
                        >
                            <progress className="progress mx-auto mt-2 w-full min-w-36 bg-transparent fill-darken-900 transition-all"></progress>
                            <div
                                id="progress"
                                className="h-12 w-full min-w-36 animate-bounce bg-black"
                            ></div>
                            <p className="text-nowrap font-header text-darken-800">
                                {props.data.loading.text}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    }

    return (
        <div className="fixed left-0 right-0 top-2 z-40 mx-auto flex w-full flex-col justify-center overflow-visible">
            <div className="mx-auto w-full max-w-xl py-1.5">
                <GyroBevel>
                    <NavButtons />
                </GyroBevel>
            </div>
            {props.data && createDataDependants()}
        </div>
    );
}
