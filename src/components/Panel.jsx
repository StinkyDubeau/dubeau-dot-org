import { motion, AnimatePresence } from "framer-motion";

export default function Panel(props) {
    return (
        <AnimatePresence>
            <motion.div
                whileTap={{ scale: 1.01 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className={
                    props.className
                        ? props.className
                        : `rounded-3xl bg-lighten-900 p-2 shadow-lg`
                }
            >
                {props.children}
                {/* 𝐒wag */}
            </motion.div>
        </AnimatePresence>
    );
}
