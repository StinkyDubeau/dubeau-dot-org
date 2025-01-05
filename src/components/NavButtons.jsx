import Button from "./Button";
import { Link } from "react-router-dom";

export default function NavButtons(props) {
    return (
        <div className="mx-4 flex ">
            {!props.noHome && (
                <Link
                    className="m-1 rounded-xl p-1 font-header text-2xl text-darken-700 transition-all hover:rounded-3xl hover:bg-darken-50 hover:px-3 hover:shadow"
                    to="/"
                >
                    <p className="mt-0.5">home</p>
                </Link>
            )}
            <Link
                className="m-1 rounded-xl p-1 font-header text-2xl text-darken-700 transition-all hover:rounded-3xl hover:bg-darken-50 hover:px-3 hover:shadow"
                to="/fun"
            >
                <p className="mt-0.5">playground</p>
            </Link>
            <Link
                className="m-1 rounded-xl p-1 font-header text-2xl text-darken-700 transition-all hover:rounded-3xl hover:bg-darken-50 hover:px-3 hover:shadow"
                to="/contact"
            >
                <p className="mt-0.5">contact</p>
            </Link>
            {props.children}
        </div>
    );
}
