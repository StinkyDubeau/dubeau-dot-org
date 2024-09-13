import { useState } from "react";
import BigButton from "../../components/BigButton";
import Button from "../../components/Button";
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
                <div className="bg-pink-600 h-screen w-screen text-lighten-800 text-xl">
                    <h1 className="mb-8 font-header text-3xl font-light tracking-tighter text-darken-700 max-sm:text-5xl">
                        Under Construction
                    </h1>

                    <h1 className="text-lighten-800">
                        {count}
                    </h1>

                    <div className="flex justify-center gap-2">
                        <button className="p-6 bg-pink-500 hover:bg-pink-300 rounded-xl transition-all hover:scale-110" onClick={() => setCount(count + 1)}>+</button>
                        <button className="p-6 bg-pink-500 hover:bg-pink-300 rounded-xl transition-all hover:scale-110" onClick={() => setCount(count - 1)}>-</button>
                    </div>

                    <Link
                        to="/fun"
                        className="text-lighten-800 underline"
                    >
                        Back to home
                    </Link>
                </div>
            </Frame>
        </>
    );
}
