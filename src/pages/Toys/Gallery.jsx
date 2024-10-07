import { useEffect, useState } from "react";
import Frame from "../../components/Frame";
import { Link } from "react-router-dom";

import { list } from "aws-amplify/storage";

try {
    const result = await list({
        path: "Backgrounds/",
        // Alternatively, path: ({identityId}) => `protected/${identityId}/photos/`
    });
} catch (error) {
    console.log(error);
}

export default function (props) {
    return (
        <>
            <Frame
                noNavbar
                data={props.data}
            >
                <div className="flex h-screen w-screen flex-col p-6 text-xl text-darken-800">
                    <div className="flex h-full flex-col justify-center">
                        <h1 className="font-header text-3xl text-darken-200">
                            Gallery under construction
                        </h1>
                    </div>
                    <image
                        className="h-24 w-24 bg-blue-300"
                        src="s3://dubeau-dot-org/Backgrounds/aleksey-parakhnevich-E6EoRgfMOok-unsplash.jpg"
                    />
                    <image
                        className="h-24 w-24 bg-red-300"
                        src="https://static.vecteezy.com/system/resources/previews/022/448/291/large_2x/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg"
                    />
                    <Link
                        to="/fun"
                        className="m-0 font-header text-darken-800"
                    >
                        Back to fun
                    </Link>
                </div>
            </Frame>
        </>
    );
}
