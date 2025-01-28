import { motion } from "framer-motion";

export default function Panel(props) {
    // Passed className takes priority over built-in styling.
    return (
        <motion.div
            className={`${props.className && props.className} rounded border border-darken-500 bg-lighten-500 backdrop-blur-lg`}
        >
            {props.children}
        </motion.div>
    );
}
