import { motion } from "framer-motion";

export default function Panel(props) {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className={
                props.className
                    ? props.className
                    : `rounded-3xl bg-lighten-900 shadow-lg p-2`
            }
        >
            {props.children}
            {/* 𝐒wag */}
        </motion.div>
    );
}
