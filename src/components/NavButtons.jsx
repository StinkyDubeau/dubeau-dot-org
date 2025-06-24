import Button from "./Button";
import { Link } from "react-router-dom";

export default function NavButtons(props) {
    return (
        <div className="mx-auto flex gap-2">
            {!props.noHome && (
                <Link
                    className="m-auto flex h-full w-full flex-col justify-center rounded-full font-header text-2xl text-darken-700 transition-all hover:bg-lighten-900 hover:px-3 hover:shadow-lg"
                    to="/"
                >
                    <p className="">home</p>
                </Link>
            )}
            <Link
                className="m-auto flex h-full w-full flex-col justify-center rounded-full font-header text-2xl text-darken-700 transition-all hover:bg-lighten-900 hover:px-3 hover:shadow-lg"
                to="/fun"
            >
                <p className="">playground</p>
            </Link>
            <Link
                className="m-auto flex h-full w-full flex-col justify-center rounded-full font-header text-2xl text-darken-700 transition-all hover:bg-lighten-900 hover:px-3 hover:shadow-lg"
                to="/contact"
            >
                <p className="">contact</p>
            </Link>
            {props.children}
        </div>
    );
}
