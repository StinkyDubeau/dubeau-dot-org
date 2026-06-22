import { Link, useLocation } from "react-router-dom";

export default function NavButtons({ children }) {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const navItems = [
        isHome ? { to: "/chat", label: "p2p chat" } : { to: "/", label: "home" },
        { to: "/fun", label: "playground" },
        { to: "/contact", label: "contact" },
    ];

    const isActive = (to) =>
        to === "/"
            ? location.pathname === "/"
            : location.pathname.startsWith(to);

    return (
        <nav
            aria-label="Primary"
            className="mx-auto grid w-[calc(100vw-1.5rem)] max-w-[23rem] grid-cols-3 gap-1 rounded-[1.75rem] bg-lighten-800 p-1 shadow-lg shadow-darken-100 backdrop-blur-3xl sm:max-w-xl md:flex md:w-full md:max-w-none md:justify-center md:gap-2 md:bg-transparent md:p-0 md:shadow-none"
        >
            {navItems.map((item) => (
                <Link
                    key={item.to}
                    to={item.to}
                    aria-current={isActive(item.to) ? "page" : undefined}
                    className={`flex min-h-14 cursor-default items-center justify-center rounded-[1.35rem] px-2 py-2 font-header text-sm font-semibold tracking-normal transition-all md:min-h-12 md:min-w-32 md:px-4 md:text-lg ${
                        isActive(item.to)
                            ? "bg-darken-800 text-lighten-900 shadow-md"
                            : "text-darken-700 hover:bg-lighten-900 hover:shadow"
                    }`}
                >
                    <span className="leading-none">{item.label}</span>
                </Link>
            ))}
            {children}
        </nav>
    );
}
