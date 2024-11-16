import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServerCard(props) {
    // TODO: Use motion.div layout="" to create smooth animations into the server pages
    // See https://motion.dev/docs/react-layout-animations
    return (
        <>
            <motion.div
                layoutId={props.img}
                whileHover={{ width: 200 }}
                whileTap={{ y: -10 }}
                transition={{ duration: 0.15 }}
                className={`${props.className} card h-[200px] w-44 overflow-hidden rounded-2xl bg-lighten-900 shadow-lg transition-all hover:shadow-xl`}
            >
                <Link to={props.to}>
                    <img
                        id={props.img}
                        className="h-full object-cover brightness-90 transition-all"
                        src={props.img}
                    />
                    {/* Container */}
                    <div className="z-25 relative -top-[95%] m-2 flex h-40 flex-col justify-center gap-2 rounded-lg drop-shadow transition-all">
                        {/* Spacer */}
                        <p className="z-10 mt-4 font-header text-3xl text-white drop-shadow">
                            {props.title}
                        </p>
                        <p className="z-10 font-header font-semibold text-white drop-shadow">
                            {props.subtitle}
                        </p>
                        <p className="animate-pulse font-header text-white hover:animate-none">
                            {props.announcement && props.announcement}
                        </p>
                    </div>
                </Link>
            </motion.div>
        </>
    );
}
