import Navbar from "./Navbar";
import { useRef, useEffect } from "react";
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
                            className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full justify-between bg-red-500 px-3 py-2 shadow-lg md:bottom-0 md:top-auto"
                        >
                            <div className="flex w-full items-center justify-stretch gap-2">
                                <button
                                    className="flex-0 text-nowrap rounded-lg px-2 py-1 font-header text-sm font-semibold text-white underline transition-all hover:bg-red-600"
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
                                <div className="hidden flex-grow text-nowrap px-2 font-header text-white shadow-inner-xl sm:block">
                                    {props.data && (
                                        <ul className="flex max-h-6 flex-wrap overflow-scroll scrollbar-hide">
                                            {props.data
                                                ? Object.keys(props.data).map(
                                                      (key) => (
                                                          <li
                                                              key={key}
                                                              className="ml-4"
                                                          >
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
        <div className="overflow-x-hidden bg-lighten-800">
            {/* Data Components */}
            {props.data && createDataDependants()}
            {!props.data.noScroll && <ScrollToTop />}
            {props.data.scrollToTop && <ScrollToTop />}

            {/* Navbar */}
            <AnimatePresence mode="wait">
                {!props.data.noNavbar && <Navbar data={props.data} />}
            </AnimatePresence>

            {/* Content */}
            <div
                className={`min-w-screen -z-50 h-max min-h-[100dvh] overflow-x-hidden ${props.data.vignette === true ? "bg-darken shadow-inner-4xl" : "bg-lighten"}`}
            >
                <div
                    className={`m-auto ${!props.data.noNavbar && "pb-28 md:pb-0 md:pt-20"} `}
                >
                    <div className="mx-auto w-full max-w-screen-xl justify-center xs:flex">
                        <div className="flex w-full flex-col">{props.children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
