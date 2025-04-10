import { motion, AnimatePresence } from "framer-motion";

export default function Panel(props) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={
                    props.className
                        ? props.className
                        : `relative top-0 h-full w-full rounded-3xl animate-gradient-x bg-gradient-to-bl from-pink-700 via-purple-600 to-zinc-200 shadow-inner-3xl shadow-lighten-600`
                }
            >
                <div className="border border-x-darken-50 rounded-3xl border-b-darken-50 border-t-darken-100 bg-lighten-400 opacity-95 shadow-lg backdrop-blur-lg transition-all hover:border-x-darken-100 hover:border-b-darken-100 hover:bg-lighten-300 hover:opacity-100">
                    {props.children}
                </div>
                {/* 𝐒wag */}
            </motion.div>
            {/* Gradient background, only if no higher order styling */}
        </AnimatePresence>
    );
}
