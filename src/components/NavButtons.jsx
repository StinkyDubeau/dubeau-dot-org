import Button from "./Button";
import { Link } from "react-router-dom";

export default function NavButtons({ isOnHome, children }) {
    return (
        <div className="mx-auto flex h-full gap-3">
            {isOnHome ? (
                <Link
                    className="m-auto flex h-full w-full cursor-default flex-col justify-center rounded-full font-header text-2xl text-darken-700 transition-all hover:font-semibold"
                    to="/chat"
                >
                    <p className="text-nowrap">p2p chat</p>
                </Link>
            ) : (
                <Link
                    className="m-auto flex h-full w-full cursor-default flex-col justify-center rounded-full font-header text-2xl text-darken-700 transition-all hover:font-semibold"
                    to="/"
                >
                    <p className="">home</p>
                </Link>
            )}
            {/* Don't forget to change style on home page if you are changing below style */}
            <Link
                className="m-auto flex h-full w-full cursor-default flex-col justify-center rounded-full font-header text-2xl text-darken-700 transition-all hover:font-semibold"
                to="/fun"
            >
                <p className="">sandbox</p>
            </Link>
            <Link
                className="m-auto flex h-full w-full cursor-default flex-col justify-center rounded-full font-header text-2xl text-darken-700 transition-all hover:font-semibold"
                to="/contact"
            >
                <p className="">contact</p>
            </Link>
            {children}
        </div>
    );
}
