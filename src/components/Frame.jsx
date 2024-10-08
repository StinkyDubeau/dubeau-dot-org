import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Frame(props) {
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
            {props.data && createDataDependants()}

            {/* Navbar */}
            {!props.noNavbar && <Navbar data={props.data} />}

            {/* Content */}
            <div
                className={`h-max -z-30 min-h-screen ${props.vignette === !null ? "bg-zinc-800 shadow-inner-4xl" : "bg-zinc-200"}`}
            >
                <div className={`m-auto ${!props.noNavbar && "pt-16"} `}>
                    <div className="max-w-screen-xl mx-auto flex justify-center">
                        <div className="flex flex-col">{props.children}</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            {!props.noNavbar && <Footer data={props.data} />}

        </>
    );
}
