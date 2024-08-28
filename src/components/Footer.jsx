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
        <div className="z-40 mx-auto p-2 flex w-full justify-center bg-slate-100 backdrop-blur-3xl transition-all">
            <p className="font-header text-darken-600">Jake Dubeau  🇨🇦  2024</p>
        </div>
    );
}
