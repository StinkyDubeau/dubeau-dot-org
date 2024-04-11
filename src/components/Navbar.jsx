import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div className="fixed m-auto w-full bg-lighten shadow-lg backdrop-blur">
            <div className="mx-4 flex ">
                <Link
                    className="m-1 rounded-xl bg-darken-100 p-1 font-header text-3xl transition-all hover:rounded-lg hover:bg-darken-200 hover:px-2"
                    to="/"
                >
                    dubeau.org
                </Link>{" "}
                <Link
                    className="shadow-inner m-2 rounded-xl bg-darken-100 font-header text-xl transition-all hover:rounded-lg hover:bg-darken-200 hover:px-2"
                    to="/"
                >
                    about
                </Link>
                {props.children}
            </div>
        </div>
    );
}
