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
                <div className="flex flex-col h-screen w-screen text-darken-800 text-xl p-6">
                    <div className="flex h-full flex-col justify-center">
                        <h1 className="font-header text-darken-200 text-9xl">
                            Dayplanner under construction
                        </h1>


                    </div>
                    <Link
                        to="/fun"
                        className="text-darken-800 font-header m-0"
                    >
                        Back to fun
                    </Link>
                </div>
            </Frame>
        </>
    );
}
