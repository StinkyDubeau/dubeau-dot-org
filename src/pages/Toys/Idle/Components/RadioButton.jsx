import daisyui from "daisyui";
import { motion } from "framer-motion";

// onCheck should be set to a setState function
// checked should be set to a getState function
// onClick will override the default "check-uncheck" behaviour

export default function RadioButton({
    className,
    body,
    children,
    onClick,
    checked,
    onCheck,
    horizontal,
}) {
    return (
        <div
            className={`flex ${!horizontal && "flex-col"} ${horizontal && "gap-2"}`}
        >
            <motion.input
                type="radio"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1 }}
                className={
                    className
                        ? className
                        : "m-auto rounded-xl bg-lighten-900 p-2 font-header"
                }
                onClick={onclick ? onClick : () => onCheck(!checked)}
            />
            {body && body}
            {children && children}
        </div>
    );
}
