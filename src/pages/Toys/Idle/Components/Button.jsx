import daisyui from "daisyui";
import { motion } from "framer-motion";

export default function Button({ className, body, children, onClick }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className={
                className ? className : "rounded-2xl bg-lighten-900 font-header"
            }
            onClick={onClick}
        >
            {body && body}
            {children && children}
        </motion.button>
    );
}
