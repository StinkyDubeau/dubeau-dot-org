import { useState } from "react";
import { motion } from "framer-motion";
import defaultImg from "../../../../assets/coin.png";

export default function Resource(props) {
    const [name, setName] = useState(props.name ? props.name : "Resource");
    const [img, setImg] = useState(props.img ? props.img : defaultImg);
    const [count, setCount] = useState(props.count ? props.count : 0);

    const [enlarged, setEnlarged] = useState(
        props.englarged ? props.enlarged : false,
    );

    function createThumbnail() {
        return (
            <motion.button
                onClick={() => setEnlarged(true)}
                layoutId="count"
                className="flex"
            >
                <img
                    className="h-6"
                    src={img}
                />
                {name}: {count} {unit}
            </motion.button>
        );
    }

    function createEnlarged() {
        return (
            <div className="fixed z-30 h-screen w-screen bg-green-400">
                <div
                    id="titlebar"
                    className="flex w-full justify-end gap-2"
                >
                    <button onClick={() => setEnlarged(false)}>Close</button>
                </div>
                <p>This is {name.toLowerCase()}'s fullscreen resource page.</p>
            </div>
        );
    }

    return enlarged ? createEnlarged() : createThumbnail();
}
