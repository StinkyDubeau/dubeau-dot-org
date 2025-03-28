import { useState, useEffect, memo } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import vagueTime from "vague-time";
import Background from "./Components/Background";

import { v4 as uuidv4 } from "uuid";

import Resource from "./Tiles/Resource";

function Main(props) {
    const [tiles, setTiles] = useState([]);

    // Ensure page never has navbar
    useEffect(() => {
        props.setData({
            ...props.data,
            noNavbar: true,
            vignette: false,
        });
    }, []);

    const memoizedTile = memo(CreateOneTile, tiles);

    function CreateOneTile(tile, index) {
        return (
            <motion.div
                key={tile}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                layout
                onClick={() =>
                    // Remove this tile from the list if clicked
                    setTiles(tiles.filter((t) => t !== tile))
                }
            >
                {index}: {tile}
            </motion.div>
        );
    }

    function CreateTileList(props) {
        return (
            <AnimatePresence mode="wait">
                {props.tiles[0] && props.tiles.map(CreateOneTile)}
            </AnimatePresence>
        );
    }

    return (
        <>
            <Background />
            <div className="z-20 flex h-screen w-screen flex-col gap-1 p-4">
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
                <motion.div className="rounded-2xlgi h-full w-full flex-1 overflow-scroll bg-darken-300 p-4 shadow-inner-3xl">
                    <div className="justify-stretch gap-2">
                        <p className="h-full w-full text-center text-3xl text-lighten-200">
                            tilemap
                        </p>
                        <button onClick={() => setTiles([...tiles, uuidv4()])}>
                            Make tile
                        </button>
                        <CreateTileList tiles={tiles} />
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default memo(Main);
