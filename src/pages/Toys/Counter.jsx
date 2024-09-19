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
                <div className="flex h-screen w-screen flex-col bg-pink-600 p-6 text-xl text-lighten-800">
                    <div
                        id="main-container"
                        className="flex h-full flex-col justify-center"
                    >
                        <h1 className="font-headerScript text-9xl text-pink-200">
                            {count}
                        </h1>
                        <input className="flex-0 ml-4 w-56 bg-transparent bg-none fill-none text-7xl" />



                        <div className="flex justify-center gap-2 max-sm:flex-col">
                            <button
                                className="min-h-36 min-w-36 rounded-xl bg-pink-500 p-6 font-header text-6xl transition-all hover:scale-105 hover:bg-pink-300 active:scale-95 active:bg-pink-100"
                                onClick={() => setCount(count + 1)}
                            >
                                +
                            </button>
                            <button
                                className="min-h-36 min-w-36 rounded-xl bg-pink-500 p-6 font-header text-7xl transition-all hover:scale-105 hover:bg-pink-300 active:scale-95 active:bg-pink-100"
                                onClick={() => setCount(count - 1)}
                            >
                                -
                            </button>
                        </div>
                    </div>
                    <Link
                        to="/fun"
                        className="m-0 font-headerScript text-xl text-pink-800"
                    >
                        Back to home
                    </Link>
                </div>
            </Frame>
        </>
    );
}
