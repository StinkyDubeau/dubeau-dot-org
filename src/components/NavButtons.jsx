import { Link } from "react-router-dom";

export default function NavButtons({ isOnHome, children }) {
    const linkClass =
        "lit-nav-link m-auto flex h-full min-w-0 cursor-default flex-col justify-center rounded-full px-2 font-header text-sm text-darken-700 sm:px-3 sm:text-2xl";

    return (
        <nav className="mx-auto flex h-full w-full max-w-xl gap-1 px-1 sm:gap-2">
            {isOnHome ? (
                <Link
                    className={linkClass}
                    to="/chat"
                >
                    <p className="text-nowrap">p2p chat</p>
                </Link>
            ) : (
                <Link
                    className={linkClass}
                    to="/"
                >
                    <p className="">home</p>
                </Link>
            )}
            <Link
                className={linkClass}
                to="/fun"
            >
                <p className="">playground</p>
            </Link>
            <Link
                className={linkClass}
                to="/contact"
            >
                <p className="">contact</p>
            </Link>
            {children}
        </nav>
    );
}
