import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRef, useEffect } from "react";

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
                        <p className="font-header text-lighten-800">
                            Experimental features are active
                        </p>
                        <p className="font-header text-lighten-800">
                            {props.data && Object.values(props.data).toString()}
                        </p>
                    </div>
                )}
            </div>
        );
    }
    return (
        <>
            {/* Data Components */}
            {props.data && createDataDependants()}
            {!props.noScroll && <ScrollToTop />}

            {/* Navbar */}
            {!props.noNavbar && <Navbar data={props.data} />}

            {/* Content */}
            <div
                className={`-z-30 h-max min-h-screen ${props.vignette === !null ? "bg-darken-800 shadow-inner-4xl" : "bg-lighten"}`}
            >
                <div className={`m-auto ${!props.noNavbar && "pt-16"} `}>
                    <div className="mx-auto flex max-w-screen-xl justify-center">
                        <div className="flex flex-col">{props.children}</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            {!props.noNavbar && <Footer data={props.data} />}
        </>
    );
}
