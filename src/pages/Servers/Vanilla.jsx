import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import PackImg from "../../assets/dubeau-banner.png";
import { Link } from "react-router-dom";
import wl from "../../assets/whitelist.json";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Markdown from "react-markdown";

export default function fun(props) {
    const whitelist = wl;

    function createUser(user) {
        return (
            <div className="scale-100 text-darken-10 transition-all hover:scale-110 hover:text-darken-800">
                <p className="font-header text-lg text-darken-800">
                    {user.name}
                </p>
                <p className="font-header text-xs font-light">{user.uuid}</p>
            </div>
        );
    }

    return (
        <Frame data={props.data}>
            <motion.div
                layoutId={PackImg}
                className="m-2 flex flex-col justify-center gap-6 overflow-hidden max-sm:mt-12 sm:p-4"
            >
                <div className="flex justify-between gap-12 overflow-clip align-middle max-sm:relative max-sm:h-72 max-sm:flex-col sm:h-72">
                    <div className="flex-0  z-10 flex max-w-full justify-center max-sm:h-full">
                        <div className="my-auto flex h-fit flex-col justify-center gap-12 align-middle">
                            <div className="flex flex-col gap-2">
                                <p className="text-left font-header text-5xl text-darken-700 max-md:text-center max-sm:text-lighten-800">
                                    Vanilla
                                </p>

                                <p className="max-sm:h-shrink text-left text-xl font-light text-darken-700 max-md:text-center max-sm:text-lighten-800">
                                    An invite-only Minecraft community
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        id="vanilla"
                        className="top-0 z-0 flex-1 rounded-3xl object-cover max-sm:absolute max-sm:h-full max-sm:brightness-75 sm:w-96"
                        src={PackImg}
                    />
                </div>

                <div className="flex flex-col gap-2 rounded-3xl bg-lighten-800 p-4">
                    <p className="text-left font-header text-2xl text-darken-800">
                        ℹ️ Modded migration update
                    </p>
                    <p className="mb-4 text-left font-header text-xl text-darken-600">
                        December 13th, 2024
                    </p>
                    <Markdown className="text-left font-header text-xl text-darken-800">
                        This world is still running on Vanilla 1.21.1, and it
                        will remain that way until Create 1.21 is released.
                        Anything you build today __will__ be migrated into the
                        Create server.
                    </Markdown>
                    <Markdown className="text-left font-header text-xl text-darken-800">
                        Migrating the world to a modded server is currently
                        impossible due to issues with downgrading to 1.20. So,
                        we'll wait for Create to update instead.
                    </Markdown>
                </div>

                <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                    <p className="text-left font-header text-3xl text-darken-800">
                        Join with a vanilla client
                    </p>
                    <div
                        id="pros cons"
                        className="flex flex-wrap justify-center gap-2"
                    >
                        <div className="flex-grow rounded-full bg-green-600 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Easy to set up
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-green-600 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Works on most PCs
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-red-500 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Missing social features
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-red-500 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Worse graphics
                            </p>
                        </div>
                    </div>

                    <p className="text-left font-header text-xl text-darken-800">
                        0. Connect with us on discord to be whitelisted
                    </p>
                    <div className="justify-left flex gap-4 font-header text-darken-800 underline">
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="/contact"
                        >
                            Join the discord server
                        </Link>
                    </div>

                    <p className="text-left font-header text-xl text-darken-800">
                        1. Download and launch the latest version of Minecraft
                        Java Edition
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        2. Connect to{" "}
                        <span className="font-light text-red-500">
                            mc.dubeau.org
                        </span>
                    </p>

                    <p className="text-left font-header text-xl text-darken-800">
                        3. Have fun and be cool! Follow posted signs for general
                        rules
                    </p>
                </div>

                <div className="flex flex-col gap-4 rounded-3xl bg-lighten-800 p-4">
                    <p className="text-left font-header text-3xl text-darken-800">
                        Join with a modded client
                    </p>
                    <div
                        id="pros cons"
                        className="flex flex-wrap justify-center gap-2"
                    >
                        <div className="flex-grow rounded-full bg-green-600 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Infinite render distance
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-green-600 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Built-in shaders
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-red-500 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Higher system requirements
                            </p>
                        </div>
                        <div className="flex-grow rounded-full bg-red-500 px-3 py-1">
                            <p className="font-header font-light text-lighten-800">
                                Harder to set up
                            </p>
                        </div>
                    </div>
                    <p className="text-left font-header text-xl text-darken-800">
                        0. Connect with us on discord for support and
                        whitelisting
                    </p>
                    <div className="justify-left flex gap-4 font-header text-darken-800 underline">
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="/contact"
                        >
                            Join the discord server
                        </Link>
                    </div>
                    <p className="text-left font-header text-xl text-darken-800">
                        1. Download the MultiMC launcher for your system:
                    </p>
                    <div className="justify-left flex gap-4 font-header text-darken-800 underline">
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://files.multimc.org/downloads/mmc-develop-win32.zip"
                        >
                            Windows
                        </Link>
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://files.multimc.org/downloads/multimc_1.6-1.deb"
                        >
                            Debian/Ubuntu
                        </Link>
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://github.com/MultiMC/multimc-pkgbuild"
                        >
                            Arch
                        </Link>
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://files.multimc.org/downloads/mmc-develop-osx64.tar.gz"
                        >
                            MacOS
                        </Link>
                    </div>
                    <p className="text-left font-header text-xl text-darken-800">
                        2. Download our official MultiMC instance
                    </p>
                    <div className="justify-left flex gap-4 font-header text-darken-800 underline">
                        <Link
                            className=" scale-100 transition-all hover:scale-110"
                            to="https://files.multimc.org/downloads/mmc-develop-win32.zip"
                        >
                            dubeau.org MultiMC Instance Fall 2024
                        </Link>
                    </div>
                    <p className="text-left font-header text-xl text-darken-800">
                        3. Connect your Microsoft account by clicking "Manage
                        Accounts" in the top-right corner of MultiMC
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        4. Click "Add instance", and then import the ZIP folder
                        you downloaded in step 2
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        5. Launch the new instance and connect to{" "}
                        <span className="font-light text-red-500">
                            mc.dubeau.org
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        6. <span className="font-light">(Optional)</span> For
                        the best experience, temporarily set your render
                        distance to 32 chunks, and do some exploring. All
                        terrain that you generate will stay within your render
                        distance even if you set your render distance to
                        something low.{" "}
                        <span className="font-light">
                            (16 chunks recommended.)
                        </span>
                    </p>
                    <p className="text-left font-header text-xl text-darken-800">
                        7. Have fun and be cool! Follow posted signs for general
                        rules
                    </p>
                </div>

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
                            className="bi bi-globe my-auto text-darken-800"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>

                        <p className="text-left font-header text-xl text-darken-800">
                            World Seed{" "}
                            <span className="rounded-lg bg-blue-600 p-1 font-header font-light text-blue-600 text-lighten-800 shadow">
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
                            <span className="rounded-lg bg-blue-600 p-1 font-header font-light text-blue-600 text-lighten-800 shadow">
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
                            <span className="rounded-lg bg-blue-600 p-1 font-header font-light text-blue-600 text-lighten-800 shadow">
                                32 chunks
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
                            <span className="rounded-lg bg-blue-600 p-1 font-header font-light text-blue-600 text-lighten-800 shadow">
                                16 chunks
                            </span>
                        </p>
                    </div>

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
                            <span className="rounded-lg bg-blue-600 p-1 font-header font-light text-blue-600 text-lighten-800 shadow">
                                {whitelist.length}
                            </span>{" "}
                            players whitelisted:
                        </p>
                    </div>

                    <div className="flex w-full justify-center">
                        <div className="flex w-12 flex-1 justify-center text-center">
                            <Marquee
                                speed="50"
                                className="mt-6 w-full overflow-clip"
                            >
                                {whitelist.map(createUser)}
                            </Marquee>
                        </div>
                    </div>
                </div>
                <p className="mb-6 text-xl font-light text-darken-700 max-md:text-center">
                    Last updated December 13th, 2024
                </p>
            </motion.div>
        </Frame>
    );
}
