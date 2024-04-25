import Navbar from "./Navbar";

export default function Frame(props) {
    function createDataDependants() {
        return (
            <div>
                {/* Experimental flag */}
                {props.data.experimental && (
                    <div className="bg-green-500">
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

            {!props.noNavbar && <Navbar data={props.data} />}

            <div
                className={`h-max min-h-[130vh] ${props.vignette === !null ? "bg-zinc-800 shadow-inner-4xl" : "bg-zinc-200"}`}
            >
                <div className="m-auto max-w-screen-xl p-4">
                    <div className="mt-12 flex justify-center">
                        <div className="flex h-screen flex-col">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
