import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import vagueTime from "vague-time";
import Background from "./Components/Background";

import { v4 as uuidv4 } from "uuid";

import Resource from "./Tiles/Resource";

export default function Main(props) {
    const [tiles, setTiles] = useState([]);

    return (
        <>
            <Background />
            <div className="flex h-screen w-screen flex-col gap-1 p-4">
                {/* Status area */}
                <div className="flex-0 flex flex-col gap-1">
                    <Resource
                        name="Gold"
                        count={55}
                        unit="g"
                    />
                    <Resource
                        name="Burnoff"
                        description="The amount of excess load capacity you're currently dissipating. Burnoff is measured as lode per second (Lps)."
                        count={90}
                        unit="Lps "
                    />
                </div>
                {/* Fullscreen area */}
                <motion.div className="h-full w-full flex-1 rounded-2xl bg-darken-300 p-4 shadow-inner-3xl">
                    <div className="justify-stretch gap-2">
                        <p className="h-full w-full text-center text-3xl text-lighten-200">
                            Game Map
                        </p>
                        <button onClick={() => setTiles([...tiles, uuidv4()])}>
                            Make tile
                        </button>
                        <AnimatePresence mode="wait">
                            {tiles.map((tile, index) => (
                                <motion.div
                                    key={tile}
                                    exit={{ opacity: 1 }}
                                    layout
                                    onClick={() =>
                                        setTiles(
                                            tiles.filter((t) => t !== tile),
                                        )
                                    }
                                >
                                    {index}: {tile}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
