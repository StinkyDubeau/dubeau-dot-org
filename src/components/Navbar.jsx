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
                            className="flex w-full flex-col justify-center overflow-clip px-2"
                        >
                            <progress className="progress mx-auto mt-2 w-full min-w-36 fill-darken-900 bg-transparent transition-all"></progress>
                            <p className="text-nowrap py-1 font-header text-sm text-darken-800">
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
            className="fixed inset-x-0 bottom-0 z-40 mx-auto box-border flex w-dvw max-w-full flex-col justify-center overflow-visible bg-transparent px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] md:bottom-auto md:top-0 md:bg-lighten-700 md:px-4 md:pb-2 md:pt-2 md:backdrop-blur-3xl"
        >
            <NavButtons />
            {props.data && createDataDependants()}
        </motion.div>
    );
}
