import { useState } from "react";
import Frame from "../../components/Frame";
import { Link } from "react-router-dom";

export default function (props) {
    const [count, setCount] = useState(0);

    return (
        <>
            <Frame
                noNavbar
                data={props.data}
            >
                <div className="bg-pink-600 flex flex-col h-screen w-screen text-lighten-800 text-xl p-6">
                    <div className="flex h-full flex-col justify-center">
                        <h1 className="font-headerScript text-pink-200 text-9xl">
                            {count}
                        </h1>

                        <div className="flex max-sm:flex-col justify-center gap-2">
                            <button className="p-6 min-w-36 min-h-36 text-6xl font-header bg-pink-500 active:bg-pink-100 hover:bg-pink-300 active:scale-95 rounded-xl transition-all hover:scale-105" onClick={() => setCount(count + 1)}>+</button>
                            <button className="p-6 min-w-36 min-h-36 text-7xl font-header bg-pink-500 hover:bg-pink-300 active:bg-pink-100 active:scale-95 rounded-xl transition-all hover:scale-105" onClick={() => setCount(count - 1)}>-</button>
                        </div>

                    </div>
                    <Link
                        to="/fun"
                        className="text-pink-800 font-header m-0"
                    >
                        Back to home
                    </Link>
                </div>
            </Frame>
        </>
    );
}
