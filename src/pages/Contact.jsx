import Frame from "../components/Frame";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";

export default function (props) {
    return (
        <>
            <Frame>
                <div className="w-screen">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-800">
                            Get in touch
                        </p>
                        {/* <p className="text-left font-regular text-xl">
                            Subtitle
                        </p> */}
                    </div>
                    {/* Gradient bg */}
                    <div className="animate-gradient-x m-5 flex justify-center rounded-lg bg-gradient-to-tr from-red-300 via-yellow-200 to-purple-200 p-4 sm:gap-8">
                        <div className="flex flex-wrap justify-around gap-6 lg:gap-48">
                            <div>
                                <p className="max-w-48 text-left font-header text-5xl text-zinc-800">
                                    Contact
                                </p>
                                <p className="font-header">
                                    or report moderation issues
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="animate-gradient-x m-5 flex justify-center rounded-lg bg-gradient-to-tl from-green-600 via-cyan-600 to-yellow-500 p-4 sm:gap-8">
                        <div className="flex flex-wrap justify-around gap-6 lg:gap-48">
                            <div>
                                <p className="max-w-48 text-left font-header text-5xl text-zinc-800">
                                    Join
                                </p>
                                <p className="font-header">social channels</p>
                            </div>
                            <div className="my-auto h-12">
                                <Link className="" to="https://discord.gg/53XsWtGFvB">
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
                </div>
            </Frame>
        </>
    );
}
