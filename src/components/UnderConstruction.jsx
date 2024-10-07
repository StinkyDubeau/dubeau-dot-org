import { Link } from "react-router-dom";

export default function UnderContruction() {
    return (
        <div className="flex h-screen w-screen flex-col p-6 text-xl text-darken-800">
            <div className="flex h-full flex-col justify-center">
                <h1 className="font-header text-9xl text-darken-200">
                    Coming soon.
                </h1>
            </div>
            <Link
                to="/fun"
                className="m-0 font-header text-darken-800"
            >
                Back to home
            </Link>
        </div>
    );
}
