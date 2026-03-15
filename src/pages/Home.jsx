import Frame from "../components/Frame";
import Panel from "../components/Panel";
import NavButtons from "../components/NavButtons";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home(props) {
    // props.setData is inherited from parent object.
    // Vignette prop adds a large dark shadow to page.
    useEffect(() => {
        props.data &&
            props.setData({ ...props.data, vignette: true, noNavbar: true });
    }, []);

    return (
        <>
            <motion.div
                layout
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                className="flex flex-col justify-center gap-4"
                id="page-container"
            >
                {/* Title */}
                <Panel className="overflow-clip rounded-3xl bg-lighten-200 max-sm:w-full">
                    <div className="flex cursor-default flex-col justify-center">
                        <div className="flex">
                            <p className="flex-0 text-shadow-sm bg-gradient h-auto w-auto animate-gradient-xy bg-gradient-to-bl from-yellow-600 via-orange-500 to-pink-500 font-header text-4xl font-extrabold tracking-tighter text-darken-300 text-fuchsia-100 bg-blend-lighten drop-shadow-2xl [writing-mode:vertical-rl] max-sm:text-5xl">
                                dubeau.org
                            </p>
                            <div className="flex flex-col justify-center align-middle gap-2 px-2 font-header text-2xl tracking-wider text-darken-700">
                                <p className="">jake's web sandbox</p>
                                <NavButtons isOnHome />
                            </div>
                        </div>
                    </div>
                </Panel>
            </motion.div>

            {/* Accessibility settings */}
            <Link
                to="/accessibility"
                className={`fixed bottom-1 right-1 m-2 flex justify-center gap-2 rounded-lg bg-lighten-900 p-2 shadow-lg transition-all ${props.data.experimental && "mb-6"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="fill-black"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z" />
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" />
                </svg>
                <p className="m-auto text-darken-800">Accessibility Settings</p>
            </Link>
        </>
    );
}
