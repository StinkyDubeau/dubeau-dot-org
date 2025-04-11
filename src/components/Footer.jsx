import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";

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
        <div
            className={`z-40 mx-auto flex justify-center gap-2 bg-lighten-900 p-2 ${props.data.experimental && "pb-8"} backdrop-blur-3xl transition-all`}
        >
            <Link
                to="/contact"
                className="m-2 rounded-2xl px-3 py-2 text-darken-800 underline transition-all hover:bg-lighten-900 hover:shadow-lg"
            >
                Made by Jake 🇨🇦 2025
            </Link>
            <hr className=" border-darken-100" />
            <Link
                to="/accessibility"
                className="m-2 rounded-2xl px-3 py-2 text-darken-800 underline transition-all hover:bg-lighten-900 hover:shadow-lg"
            >
                Accessibility Settings
            </Link>
        </div>
    );
}
