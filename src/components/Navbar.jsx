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
                            className="flex h-full w-full flex-col justify-center overflow-clip px-4"
                        >
                            <progress className="progress mx-auto w-full min-w-36 shadow-inner"></progress>
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
        <div className="fixed z-40 mx-auto flex w-full flex-col justify-center overflow-clip bg-lighten-600 py-2 backdrop-blur-3xl transition-all">
            <NavButtons />
            {props.data && createDataDependants()}
        </div>
    );
}
