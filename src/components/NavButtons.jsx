import Button from "./Button";
import { Link } from "react-router-dom";

export default function NavButtons(props) {
    return (
        <div className="mx-4 flex ">
            <Link
                className="m-1 rounded-xl p-1 font-header text-3xl text-darken-700 transition-all hover:rounded-3xl hover:bg-darken-50 hover:px-3 hover:shadow"
                to="/"
            >
                home
            </Link>
            <Link
                className="m-1 rounded-xl p-1 font-header text-3xl text-darken-700 transition-all hover:rounded-3xl hover:bg-darken-50 hover:px-3 hover:shadow"
                to="/fun"
            >
                fun
            </Link>
            <Link
                className="m-1 rounded-xl p-1 font-header text-3xl text-darken-700 transition-all hover:rounded-3xl hover:bg-darken-50 hover:px-3 hover:shadow"
                to="/contact"
            >
                contact
            </Link>
            {props.children}
        </div>
    );
}
