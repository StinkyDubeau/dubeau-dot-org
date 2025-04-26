import PackImg from "../../assets/modded-banner.webp";
import wl from "../../assets/whitelist.json";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Markdown from "react-markdown";

export default function fun(props) {
    const whitelist = wl;
    const addr = "mc.dubeau.org:25569";
    const name = "Neobeau";
    const desc = "Vanilla-ish Minecraft Neoforge Server";

    function createUser(user) {
        return (
            <div className="flex scale-100 flex-col gap-2 text-darken-10 transition-all hover:text-darken-800">
                <img
                    className="m-auto aspect-auto max-h-48 w-min drop-shadow"
                    src={`https://crafatar.com/renders/body/${user.uuid}`}
                />
                <p className="font-header text-lg font-light text-darken-800">
                    {user.name}
                </p>
                <p className="font-header text-xs font-light">{user.uuid}</p>
            </div>
        );
    }

    return (
        <motion.div
            layoutId={PackImg}
            className="m-2 flex flex-col justify-center gap-6 overflow-hidden max-sm:mt-12 sm:p-4"
        >
            <div className="flex justify-between gap-12 overflow-clip align-middle max-sm:relative max-sm:h-72 max-sm:flex-col sm:h-72">
                <div className="flex-0  z-10 flex max-w-full justify-center max-sm:h-full">
                    <div className="my-auto flex h-fit flex-col justify-center gap-12 align-middle">
                        <div className="flex flex-col gap-2">
                            <p className="text-left font-header text-5xl text-darken-700 max-md:text-center max-sm:text-lighten-700">
                                {name}
                            </p>
                            <p className="max-sm:h-shrink text-left text-xl font-light text-darken-700 max-md:text-center max-sm:text-lighten-700">
                                {desc}
                            </p>
                            <button
                                className="max-sm:h-shrink mt-2 flex gap-2 text-nowrap text-left text-xl font-light text-darken-700 max-md:text-center max-sm:mx-auto max-sm:text-lighten-700"
                                onClick={() => {
                                    navigator.clipboard.writeText(addr);
                                }}
                            >
                                <p>
                                    Join at{" "}
                                    <span className="rounded-xl bg-lighten-800 p-2 text-darken-800">
                                        {addr}
                                    </span>
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="my-auto transition-all hover:scale-105 active:scale-95"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <img
                    className="top-0 z-0 flex-1 rounded-3xl object-cover max-sm:absolute max-sm:h-full max-sm:w-full max-sm:brightness-75 sm:w-96"
                    src={PackImg}
                    alt="The icon for Modded Minecraft's Server page. The image features a gameplay screenshot of a small factory with lots of machinery and parts."
                />
            </div>

            <div className="flex w-full flex-grow flex-wrap justify-between gap-6">
                {/* Whitelist warning */}
                <div className="flex w-full flex-col gap-2 rounded-3xl bg-lighten-800 p-4">
                    <p className="text-left font-header text-2xl text-darken-800">
                        📋 Whitelisted Server
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        This server is only open to registered users. Message an{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-darken-900 shadow">
                            admin
                        </span>{" "}
                        on discord if you have not been whitelisted.
                    </p>
                </div>

                {/* Updates */}
                <div className="flex w-full flex-col gap-2 rounded-3xl bg-lighten-800 p-4">
                    <p className="text-left font-header text-2xl text-darken-800">
                        ℹ️ Update v0.3
                    </p>
                    <p className="mb-4 text-left  font-header text-xl text-darken-600">
                        April 26th, 2025
                    </p>

                    <Markdown className="text-left font-header text-xl font-bold text-darken-800">
                        Notable Features:
                    </Markdown>
                    <li className="ml-4 text-left font-header text-xl text-darken-800">
                        1 player sleep
                    </li>
                    <li className="ml-4 text-left font-header text-xl text-darken-800">
                        Dynamic lights: Hold a torch in your hand to see in the
                        dark.
                    </li>
                    <li className="ml-4 text-left font-header text-xl text-darken-800">
                        Minimap: Press the{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-darken-900 shadow">
                            ~
                        </span>{" "}
                        key to toggle on and off.{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-darken-900 shadow">
                            [
                        </span>{" "}
                        and{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-darken-900 shadow">
                            ]
                        </span>{" "}
                        to adjust zoom.
                    </li>

                    <li className="ml-4 text-left font-header text-xl text-darken-800">
                        Freecam: Press{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-darken-900 shadow">
                            F4
                        </span>{" "}
                        for an out-of-body experience.
                    </li>
                    <Markdown className="mt-4 text-left font-header text-xl font-bold text-darken-800">
                        Notable Exclusions:
                    </Markdown>
                    <li className="ml-4 text-left font-header text-xl text-darken-800">
                        Create Steam & Rails: Awaiting update to support create
                        v6.0.
                    </li>
                    <div className="justify-left mt-4 flex gap-4 font-header text-darken-800 underline">
                        <a
                            className=" scale-100 transition-all hover:scale-110"
                            href="http://files.dubeau.org/neobeau%20v03.zip"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Neobeau v0.3
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl bg-lighten-800 p-4">
                <p className="text-left font-header text-3xl text-darken-800">
                    How to join
                </p>

                <div className="">
                    <p className="text-left font-header text-xl text-darken-800">
                        1. Download and install Prism Launcher:
                    </p>
                    <div className="justify-left ml-8 flex gap-4 font-header text-darken-800 underline">
                        <a
                            className=" scale-100 transition-all hover:scale-110"
                            href="https://prismlauncher.org/download/windows/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Windows
                        </a>
                        <a
                            className=" scale-100 transition-all hover:scale-110"
                            href="https://prismlauncher.org/download/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linux
                        </a>
                        <a
                            className=" scale-100 transition-all hover:scale-110"
                            href="https://prismlauncher.org/download/mac/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MacOS
                        </a>
                    </div>
                </div>
                <p className="text-left font-header text-xl text-darken-800">
                    2. Open Prism Launcher and sign in. Click "Accounts",
                    "Manage Accounts", and "Add Microsoft".
                </p>
                <div>
                    <p className="text-left font-header text-xl text-darken-800">
                        3. Download the latest Neobeau modpack ZIP file, and
                        drag it into Prism Launcher to import it:
                    </p>
                    <div className="justify-left ml-8 flex gap-4 font-header text-darken-800 underline">
                        <a
                            className=" scale-100 transition-all hover:scale-110"
                            href="http://files.dubeau.org/neobeau%20v03.zip"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download Neobeau v0.3
                        </a>
                    </div>
                </div>
                <p className="text-left font-header text-xl text-darken-800">
                    4. Double click Neobeau to launch the modpack. It may take
                    several minutes to launch the first time.
                </p>
                <p className="text-left font-header text-xl text-darken-800">
                    5. Have fun and be cool! Follow posted signs for general
                    rules. Message an{" "}
                    <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-darken-900 shadow">
                        admin
                    </span>{" "}
                    on discord if you need help connecting.
                </p>
            </div>

            {/* EXTRA INFORMATION */}
            <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4">
                <p className="text-left font-header text-3xl text-darken-800">
                    Extra information
                </p>

                <div className="flex gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="flex-0 bi bi-person-lock my-auto text-darken-800"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 5.996V14H3s-1 0-1-1 1-4 6-4q.845.002 1.544.107a4.5 4.5 0 0 0-.803.918A11 11 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664zM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                    </svg>

                    <p className="text-left font-header text-xl text-darken-800">
                        There are currently{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-blue-600 text-darken-900 shadow">
                            {whitelist.length}
                        </span>{" "}
                        players whitelisted.
                    </p>
                </div>

                <div className="flex gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-globe my-auto text-darken-800"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                    </svg>

                    <p className="text-left font-header text-xl text-darken-800">
                        World Seed{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-blue-600 text-darken-900 shadow">
                            -3185478975619901032
                        </span>
                    </p>
                </div>

                <div className="flex gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-tree my-auto text-darken-800"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507" />
                    </svg>

                    <p className="text-left font-header text-xl text-darken-800">
                        Spawn Generation{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-blue-600 text-darken-900 shadow">
                            Vanilla 1.20.4
                        </span>
                    </p>
                </div>

                <div className="flex gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-binoculars my-auto text-darken-800"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" />
                    </svg>
                    <p className="text-left font-header text-xl text-darken-800">
                        Render distance{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-blue-600 text-darken-900 shadow">
                            16 chunks
                        </span>
                    </p>
                </div>

                <div className="flex gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        s
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cpu my-auto text-darken-800"
                        viewBox="0 0 16 16"
                    >
                        <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                    </svg>

                    <p className="text-left font-header text-xl text-darken-800">
                        Simulation distance{" "}
                        <span className="rounded-lg bg-darken-50 p-1 font-header font-light text-blue-600 text-darken-900 shadow">
                            16 chunks
                        </span>
                    </p>
                </div>

                <p className="text-left font-header text-xl text-darken-800">
                    Whitelisted players, hover to see their UUIDs
                    <div className="flex w-full justify-center">
                        <div className="flex w-12 flex-1 justify-center text-center">
                            <Marquee
                                speed={150}
                                className="mt-6 w-full overflow-hidden"
                            >
                                {whitelist.map(createUser)}
                            </Marquee>
                        </div>
                    </div>
                </p>
            </div>
            <p className="mb-6 text-xl font-light text-darken-700 max-md:text-center">
                Last updated April 26th, 2025
            </p>
        </motion.div>
    );
}
