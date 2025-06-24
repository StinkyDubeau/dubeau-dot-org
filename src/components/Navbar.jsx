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
        <motion.div
            initial={{ height: 0, padding: 0 }}
            animate={{ height: 48, padding: 2 }}
            exit={{ height: 0, padding: 0 }}
            className="fixed z-40 mx-auto flex w-full flex-col justify-center overflow-clip bg-lighten-600 backdrop-blur-3xl"
        >
            <NavButtons />
            {props.data && createDataDependants()}
        </motion.div>
    );
}
