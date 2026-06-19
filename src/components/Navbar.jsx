/* eslint-disable react/prop-types */
import NavButtons from "./NavButtons";
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
        <motion.div
            initial={{ height: 0, padding: 0 }}
            animate={{ height: "auto", padding: 6 }}
            exit={{ height: 0, padding: 0 }}
            className="fixed left-0 right-0 top-2 z-40 mx-auto flex w-full flex-col justify-center overflow-visible"
        >
            <div className="mx-auto w-full max-w-xl px-2 py-1.5">
                <div className="gyro-bevel min-h-16 rounded-full p-0.5 shadow-md">
                    <div className="gyro-bevel-surface h-full rounded-full px-2 sm:px-6">
                        <NavButtons />
                    </div>
                </div>
            </div>
            {props.data && createDataDependants()}
        </motion.div>
    );
}
