import Button from "./Button";
import { Link } from "react-router-dom";

export default function NavButtons(props) {
    return (
        <div className="mx-auto flex">
            {!props.noHome && (
                <Link
                    className="m-1 rounded-full p-1 font-header text-2xl text-darken-700 transition-all hover:bg-lighten-900 hover:px-3 hover:shadow-lg"
                    to="/"
                >
                    <p className="mt-0.5">home</p>
                </Link>
            )}
            <Link
                className="m-1 rounded-full p-1 font-header text-2xl text-darken-700 transition-all hover:bg-lighten-900 hover:px-3 hover:shadow-lg"
                to="/fun"
            >
                <p className="mt-0.5">playground</p>
            </Link>
            <Link
                className="m-1 rounded-full p-1 font-header text-2xl text-darken-700 transition-all hover:bg-lighten-900 hover:px-3 hover:shadow-lg"
                to="/contact"
            >
                <p className="mt-0.5">contact</p>
            </Link>
            {props.children}
        </div>
    );
}
