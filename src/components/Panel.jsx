import { motion, AnimatePresence } from "framer-motion";

export default function Panel(props) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                className={
                    props.className
                        ? props.className
                        : `w-full rounded-3xl bg-lighten-600 p-2 shadow-lg backdrop-blur-3xl`
                }
            >
                {props.children}
                {/* 𝐒wag */}
            </motion.div>
        </AnimatePresence>
    );
}
