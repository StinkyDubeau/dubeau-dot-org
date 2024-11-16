import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
                {props.data.experimental && (
                    <div className="fixed bottom-0 z-50 mx-auto flex w-full justify-between bg-red-500 ">
                        <div className="flex gap-2">
                            <p className="font-header text-white">
                                Experimental features are active.
                            </p>
                            <Link
                                to="/trackers"
                                className="font-header text-white underline"
                            >
                                Go to trackers page
                            </Link>
                        </div>
                        <p className="font-header text-white">
                            {props.data && Object.values(props.data).toString()}
                        </p>
                    </div>
                )}
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
                    <div className="mx-auto flex max-w-screen-xl justify-center">
                        <div className="flex flex-col">{props.children}</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            {!props.noNavbar && <Footer data={props.data} />}
        </div>
    );
}
