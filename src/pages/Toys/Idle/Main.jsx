import { useState, useEffect, memo } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import vagueTime from "vague-time";
import Background from "./Components/Background";

import { v4 as uuidv4 } from "uuid";

import Resource from "./Tiles/Resource";
import OuterCard from "./Components/OuterCard";

function Main(props) {
    const [tileset, setTileset] = useState([]);
    const [totalPower, setTotalPower] = useState(0);

    // Calculate sum power of tiles[] every time a tile is added or removed.
    useEffect(() => {
        // Reset before summing
        setTotalPower(0);
        tileset.forEach((tile) => {
            setTotalPower(totalPower + tile.power);
        });
    }, [tileset]);

    // Ensure page never has navbar
    useEffect(() => {
        props.setData({
            ...props.data,
            noNavbar: true,
            vignette: false,
        });
    }, []);

    const CreateOneTile = memo(function CreateOneTile({ tile, index }) {
        return (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                layout
                className="m-2 rounded-2xl bg-lighten-800 text-darken-800"
                onClick={() =>
                    // Remove this tile from the list if clicked
                    setTileset(tileset.filter((t) => t !== tile))
                }
            >
                {index}: {tile.name}, contributing {tile.power} <br />
                {tile.uuid}
            </motion.div>
        );
    });

    function CreateTileList({ tiles }) {
        return (
            <AnimatePresence
                mode="wait"
                className="flex flex-col gap-2"
            >
                {tiles[0] &&
                    tiles.map((tile, index) => (
                        <CreateOneTile
                            key={tile.uuid}
                            tile={tile}
                            index={index}
                        />
                    ))}
            </AnimatePresence>
        );
    }

    function CreateTilesetSummary({ tiles }) {
        return (
            <div className="m-2 rounded-2xl bg-lighten-800 text-darken-800">
                <p>{totalPower} watts</p>
            </div>
        );
    }

    function createRandomTile() {
        setTileset([
            ...tileset,
            {
                name: "new-tile",
                uuid: uuidv4(),
                power: Math.random() * 100 - 50,
            },
        ]);

        return 0;
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
                        <CreateTilesetSummary />
                        <button onClick={() => createRandomTile()}>
                            Make tile
                        </button>
                        <CreateTileList tiles={tileset} />
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default memo(Main);
