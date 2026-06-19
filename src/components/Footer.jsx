/* eslint-disable react/prop-types */
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
            className={`lit-footer z-40 mx-auto flex justify-center gap-2 p-2 ${props.data.experimental && "pb-8"} backdrop-blur-3xl transition-all`}
        >
            <Link
                to="/contact"
                className="lit-footer-link m-2 cursor-default rounded-full px-3 py-2 font-header text-darken-800"
            >
                Made by Jake 🇨🇦 2025
            </Link>
            <hr className=" border-darken-100" />
            <Link
                to="/accessibility"
                className="lit-footer-link m-2 cursor-default rounded-full px-3 py-2 font-header text-darken-800"
            >
                Accessibility Settings
            </Link>
            <Link
                to="https://github.com/StinkyDubeau/dubeau-dot-org"
                className="lit-footer-link m-2 cursor-default rounded-full px-3 py-2 font-header text-darken-800"
            >
                Source Code
            </Link>
        </div>
    );
}
