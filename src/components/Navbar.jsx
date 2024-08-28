import NavButtons from "./NavButtons";

export default function Navbar(props) {
    // Run only if the parent Frame has props.data
    function createDataDependants() {
        return (
            <div>
                {props.data && props.data.loading && (
                    <div className="flex h-full flex-col justify-center px-4">
                        <progress className="progress w-24 border-lighten-800 bg-darken-400 fill-lighten-800 text-lighten-800"></progress>
                        <p className="font-header text-darken-800">
                            {props.data.loading.text}
                        </p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="fixed py-2 z-40 mx-auto flex w-full justify-center bg-lighten-600 backdrop-blur-3xl transition-all">
            <NavButtons />
            {props.data && createDataDependants()}
        </div>
    );
}
