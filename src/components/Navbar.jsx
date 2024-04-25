import NavButtons from "./NavButtons";

export default function Navbar(props) {
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
                            {props.data && Object.values(props.data)}
                        </p>
                    </div>
                )}
                {/* Loading indicator */}
                <div className="flex flex-col justify-center p-4">
                    {props.data && props.data.loading && (
                        <progress className="progress w-24 border-lighten-800 bg-darken-400 fill-lighten-800 text-lighten-800"></progress>
                    )}
                </div>
            </div>
        );
    }
    return (
        <div className="fixed z-50 mx-auto flex w-full justify-between bg-lighten-600 shadow-lg backdrop-blur-3xl transition-all">
            <NavButtons />
            {props.data && createDataDependants()}
        </div>
    );
}
