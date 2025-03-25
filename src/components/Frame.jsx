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
                                <Link
                                    to="/"
                                    className="flex-0 text-nowrap font-header text-white shadow transition-all hover:bg-red-600"
                                >
                                    Click to disable experimental features.
                                </Link>

                                <p className="flex-0 ml-auto overflow-ellipsis text-nowrap text-right font-header text-white max-sm:hidden">
                                    Session data:
                                </p>
                                <p className="flex-grow overflow-scroll text-nowrap px-2 font-header text-white shadow-inner-xl scrollbar-hide">
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
