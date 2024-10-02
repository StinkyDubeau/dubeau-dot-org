import { useState } from "react";
import Frame from "../../components/Frame";
import { Link } from "react-router-dom";
import vagueTime from "vague-time";

export default function (props) {
    const [count, setCount] = useState(0);

    // returns 'in a minute'
    console.log(
        vagueTime.get({
            to: Date.now() + 60000,
        }),
    );

    return (
        <>
            <Frame
                noNavbar
                data={props.data}
            >
                {/* Container */}
                <div className="my-auto flex h-screen flex-col justify-center gap-2 drop-shadow-lg">
                    {/* Counter Widgit */}
                    <div className=" flex flex-col rounded-3xl bg-pink-600 p-6 text-xl text-lighten-800">
                        <div
                            id="main-container"
                            className="flex h-full flex-col justify-center"
                        >
                            <h1 className="font-headerScript text-9xl text-pink-100">
                                {count}
                            </h1>
                            <div className="flex justify-center gap-2 max-sm:flex-col">
                                <button
                                    className="min-h-36 min-w-36 rounded-xl bg-pink-500 p-6 font-header text-6xl transition-all hover:scale-105 hover:bg-pink-300 active:scale-95 active:bg-pink-100 active:blur sm:hidden"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                                <button
                                    className="min-h-36 min-w-36 rounded-xl bg-pink-500 p-6 font-header text-7xl transition-all hover:scale-105 hover:bg-pink-300 active:scale-95 active:bg-pink-100 active:blur"
                                    onClick={() => setCount(count - 1)}
                                >
                                    -
                                </button>
                                <button
                                    className="min-h-36 min-w-36 rounded-xl bg-pink-500 p-6 font-header text-6xl transition-all hover:scale-105 hover:bg-pink-300 active:scale-95 active:bg-pink-100 active:blur max-sm:hidden"
                                    onClick={() => setCount(count + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Back to home */}
                    <div className="flex min-h-24 justify-center rounded-3xl bg-lighten-800">
                        <Link
                            to="/fun"
                            className="m-0 flex flex-col justify-center font-header text-xl text-darken-700"
                        >
                            Back to home
                        </Link>
                    </div>
                </div>
            </Frame>
        </>
    );
}
