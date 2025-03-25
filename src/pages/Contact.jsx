import Frame from "../components/Frame";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function (props) {
    // Ensure page always has navbar
    useEffect(() => {
        props.setData({
            ...props.data,
            noNavbar: false,
        });
    }, []);

    return (
        <>
            <div className="">
                <div className="m-5 flex animate-gradient-x justify-center rounded-2xl bg-gradient-to-tl from-green-600 via-cyan-600 to-yellow-500 p-4 sm:gap-8">
                    <div className="flex flex-wrap justify-around gap-6 lg:gap-48">
                        <div className="flex w-72 flex-col">
                            <p className="font-header text-5xl text-lighten-800">
                                Join
                            </p>
                            <p className="font-header text-lighten-800">
                                socials
                            </p>
                        </div>
                        <div className="my-auto flex w-72 flex-wrap justify-center">
                            <Link
                                className="rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-lighten-100 p-2 shadow-md transition-all hover:scale-105 hover:shadow-lg"
                                to="https://discord.gg/53XsWtGFvB"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    className="fill-lighten-900 drop-shadow-lg"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Gradient bg */}
                <div className="m-5 flex animate-gradient-x justify-center rounded-2xl bg-gradient-to-tr from-red-300 via-yellow-200 to-purple-200 p-4 sm:gap-8">
                    <div className="flex flex-wrap justify-around gap-6 lg:gap-48">
                        <div className="flex w-72 flex-col">
                            <p className="font-header text-5xl text-darken-800">
                                Contact
                            </p>
                            <p className="font-header text-darken-700">
                                or report moderation issues
                            </p>
                        </div>
                        <ContactForm
                            data={props.data}
                            setData={props.setData}
                        />
                    </div>
                </div>
                <div className="m-5 flex animate-gradient-x justify-center rounded-2xl bg-gradient-to-tl from-pink-600 via-purple-500 to-blue-400 p-4 sm:gap-8">
                    <div className="flex flex-wrap justify-around gap-6 lg:gap-48">
                        <div className="flex w-72 flex-col">
                            <p className="font-header text-5xl text-lighten-800">
                                Jake
                            </p>
                            <p className="font-header text-lighten-800">
                                site owner
                            </p>
                        </div>
                        <div className="my-auto flex w-72 flex-wrap justify-center gap-4">
                            {/* EMAIL */}
                            <Link
                                className="rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-lighten-100 p-2 shadow-md transition-all hover:scale-105 hover:shadow-lg"
                                to="mailto:dubeaujake@gmail.com"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    className="fill-lighten-900 drop-shadow-lg"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                            </Link>
                            {/* GITHUB */}
                            <Link
                                className="rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-lighten-100 p-2 shadow-md transition-all hover:scale-105 hover:shadow-lg"
                                to="https://github.com/StinkyDubeau/"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    className="fill-lighten-900 drop-shadow-lg"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />{" "}
                                </svg>
                            </Link>
                            {/* LINKEDIN */}
                            <Link
                                className="rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-lighten-100 p-2 shadow-md transition-all hover:scale-105 hover:shadow-lg"
                                to="https://www.linkedin.com/in/dubeau-jake"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    className="fill-lighten-900 drop-shadow-lg"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />{" "}
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
