import { motion } from "framer-motion";

export default function Button({className, body, to, children}) {
    return (
        <motion.button className={className && className}>
            {children && children}
        </motion.button>
    );
}
