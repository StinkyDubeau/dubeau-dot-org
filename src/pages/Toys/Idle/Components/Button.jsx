import daisyui from "daisyui";
import { motion } from "framer-motion";

export default function Button({ className, body, children, onClick }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className={
                className
                    ? className
                    : "rounded-xl bg-lighten-900 p-2 font-header"
            }
            onClick={onClick}
        >
            {body && body}
            {children && children}
        </motion.button>
    );
}
