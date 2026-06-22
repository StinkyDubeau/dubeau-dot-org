import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            className={`${props.className} card h-56 cursor-default overflow-hidden rounded-2xl bg-black shadow-lg transition active:scale-[0.98] md:h-52 md:w-full`}
        >
            <Link
                to={props.to}
                className="block h-full cursor-default"
            >
                <motion.img
                    id={props.img}
                    className="absolute h-full w-full object-cover shadow-xl brightness-90"
                    src={props.img}
                    alt={props.alt}
                />
                {/* Container */}
                <div className="z-25 relative flex h-full flex-col justify-end gap-2 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 drop-shadow">
                    {/* Spacer */}
                    <p className="z-10 text-left font-header text-3xl font-semibold leading-none text-white drop-shadow">
                        {props.title}
                    </p>
                    <p className="z-10 text-left font-header font-semibold text-white drop-shadow">
                        {props.subtitle}
                    </p>
                    <p className="text-left font-header text-white">
                        {props.announcement && props.announcement}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}
