import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Frame(props) {
    function ScrollToTop() {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView(), []);
        return <div ref={elementRef} />;
    }

    function createDataDependants() {
        return (
            <div>
                {/* Experimental flag */}
                <AnimatePresence>
                    {props.data.experimental && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="fixed bottom-0 z-50 mx-auto flex w-full justify-between bg-red-500 pl-2 "
                        >
                            <div className="flex w-full justify-stretch gap-2">
                                <p className="flex-0 overflow-ellipsis text-nowrap font-header text-white">
                                    Experimental features are active.
                                </p>
                                <Link
                                    onClick={() => {
                                        props.setData({
                                            ...props.data,
                                            experimental: false,
                                        });
                                    }}
                                    to="/"
                                    className="flex-0 m-0.5 text-nowrap rounded bg-lighten-800 font-header text-sm text-darken-800 shadow transition-all hover:scale-105 hover:shadow-lg"
                                >
                                    Disable
                                </Link>
                                <Link
                                    to="/trackers"
                                    className="flex-0 m-0.5 text-nowrap rounded bg-lighten-800 font-header text-sm text-darken-800 shadow transition-all hover:scale-105 hover:shadow-lg"
                                >
                                    Go to trackers page
                                </Link>

                                <p className="flex-0 ml-auto overflow-ellipsis text-nowrap text-right font-header text-white">
                                    Session data:
                                </p>
                                <p className="flex-0 overflow-scroll text-nowrap px-2 font-header text-white shadow-inner-xl scrollbar-hide">
                                    {props.data &&
                                        Object.values(props.data).toString()}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="bg-darken-900">
            {/* Data Components */}
            {props.data && createDataDependants()}
            {!props.noScroll && <ScrollToTop />}

            {/* Navbar */}
            {!props.noNavbar && <Navbar data={props.data} />}

            {/* Content */}
            <div
                className={`min-w-screen -z-30 h-max min-h-screen ${props.vignette === !null ? "shadow-inner-4xl" : "bg-lighten"}`}
            >
                <div className={`m-auto ${!props.noNavbar && "pt-16"} `}>
                    <div className="mx-auto max-w-screen-xl justify-center xs:flex">
                        <div className="flex flex-col">{props.children}</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            {!props.noNavbar && <Footer data={props.data} />}
        </div>
    );
}
