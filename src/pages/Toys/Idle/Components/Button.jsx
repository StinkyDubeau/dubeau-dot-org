import { motion } from "framer-motion";

export default function Button({ className, body, children, onClick }) {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={className ? className : "rounded-2xl bg-lighten-900"}
            onClick={onClick}
        >
            {body && body}
            {children && children}
        </motion.button>
    );
}
