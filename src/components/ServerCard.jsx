import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function ServerCard(props) {
    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // TODO: Use motion.div layout="" to create smooth animations into the server pages
    // See https://motion.dev/docs/react-layout-animations
    return (
        <motion.div
            layoutId={props.img}
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className={`${props.className} card h-52 overflow-hidden rounded-2xl bg-black shadow-lg max-md:w-full md:w-44`}
        >
            <Link to={props.to}>
                <motion.img
                    id={props.img}
                    className="absolute h-full w-full object-cover shadow-xl brightness-90"
                    src={props.img}
                />
                {/* Container */}
                <div className="z-25 m-2 flex h-48 flex-col justify-center gap-2 rounded-lg drop-shadow">
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
    );
}
