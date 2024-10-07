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
                            Gallery under construction
                        </h1>


                    </div>
                    <image className="bg-blue-300 h-24 w-24" src="s3://dubeau-dot-org/Backgrounds/aleksey-parakhnevich-E6EoRgfMOok-unsplash.jpg" />
                    <image className="bg-red-300 h-24 w-24" src="https://static.vecteezy.com/system/resources/previews/022/448/291/large_2x/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg" />
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
