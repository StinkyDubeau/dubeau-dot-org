import { Link } from "react-router-dom";

export default function NavButtons({ isOnHome, children }) {
    const linkClass = `lit-nav-link flex h-full min-w-0 flex-1 cursor-default flex-col items-center justify-center rounded-full px-1.5 text-center font-header text-darken-700 sm:min-h-14 sm:px-3 sm:text-2xl ${
        isOnHome
            ? "min-h-14 text-lg xs:text-xl sm:text-2xl"
            : "min-h-14 text-base xs:text-lg sm:text-2xl"
    }`;

    return (
        <nav className="mx-auto flex h-full w-full max-w-xl gap-1 sm:gap-2">
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
