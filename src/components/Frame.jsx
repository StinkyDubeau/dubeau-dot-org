import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRef, useEffect } from "react";
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
                                <button
                                    className="flex-0 text-nowrap font-header text-white shadow transition-all hover:bg-red-600"
                                    onClick={() =>
                                        props.setData({
                                            ...props.data,
                                            experimental: false,
                                        })
                                    }
                                >
                                    Click to disable experimental features.
                                </button>

                                <p className="flex-0 ml-auto overflow-ellipsis text-nowrap text-right font-header text-white max-sm:hidden">
                                    Session data:
                                </p>
                                <div className="flex-grow text-nowrap px-2 font-header text-white shadow-inner-xl">
                                    {props.data && (
                                        <ul className="flex max-h-6 flex-wrap overflow-scroll scrollbar-hide">
                                            {props.data
                                                ? Object.keys(props.data).map(
                                                      (key) => (
                                                          <li className="ml-4">
                                                              {key.toString()}:{" "}
                                                              {props.data[
                                                                  key
                                                              ].toString()}
                                                          </li>
                                                      ),
                                                  )
                                                : "None"}
                                        </ul>
                                    )}
                                </div>
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
            {!props.data.noScroll && <ScrollToTop />}

            {/* Navbar */}
            <AnimatePresence mode="wait">
                {!props.data.noNavbar && <Navbar data={props.data} />}
            </AnimatePresence>

            {/* Content */}
            <div
                className={`min-w-screen -z-50 h-max min-h-screen ${props.data.vignette === true ? "bg-darken shadow-inner-4xl" : "bg-lighten"}`}
            >
                <div className={`m-auto ${!props.data.noNavbar && "pt-16"} `}>
                    <div className="mx-auto max-w-screen-xl justify-center xs:flex">
                        <div className="flex flex-col">{props.children}</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            {!props.data.noNavbar && <Footer data={props.data} />}
        </div>
    );
}
