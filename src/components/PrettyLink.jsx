import { Link } from "react-router-dom";

export default function PrettyLink(props) {
    return (
        <Link
            className={props.className}
            to={props.to}
        >
            <button className="">
                {props.children}
                <p className="font-header text-lg text-lighten-800">
                    {props.text}
                </p>
            </button>
        </Link>
    );
}
