/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";

export default function Panel(props) {
    const baseClassName =
        "lit-panel w-full rounded-3xl p-2 shadow-lg backdrop-blur-3xl";
    const className = props.className
        ? `${baseClassName} ${props.className}`
        : baseClassName;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0.96, scale: 0.985 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className={className}
            >
                {props.children}
                {/* 𝐒wag */}
            </motion.div>
        </AnimatePresence>
    );
}
