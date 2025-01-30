import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vagueTime from "vague-time";
import Background from "./Components/Background";

import Resource from "./Tiles/Resource";

export default function Main(props) {
    return (
        <>
            <Background></Background>
            <div className="flex h-screen w-screen flex-col p-4">
                {/* Status area */}
                <div className="mx-4 flex gap-2 bg-lighten-800 shadow-xl">
                    <Resource
                        name="Gold"
                        count={55}
                    />
                </div>
                {/* Fullscreen area */}
                <div className="h-full w-full rounded-2xl bg-darken-300 p-4 shadow-inner-3xl">
                    <div className="flex justify-stretch gap-2"></div>
                </div>
            </div>
        </>
    );
}
