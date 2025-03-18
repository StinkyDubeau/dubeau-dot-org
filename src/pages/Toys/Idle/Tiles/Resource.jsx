import { useState } from "react";
import { motion } from "framer-motion";
import defaultImg from "../../../../assets/coin.png";

```
The interface of a resource:
- name: string
- img: image file
- count: number
- description: string
- unit: string
- enlarged: boolean

```;

export default function Resource(props) {
    const [name, setName] = useState(props.name ? props.name : "Resource");
    const [img, setImg] = useState(props.img ? props.img : defaultImg);
    const [count, setCount] = useState(props.count ? props.count : 0);
    const [description, setDescription] = useState(
        props.description
            ? props.description
            : "There is no description for this resource.",
    );
    const [unit, setUnit] = useState(props.unit ? props.unit : "");

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
            <div className="fixed z-30 h-screen w-screen bg-green-400 text-left">
                <div
                    id="titlebar"
                    className="flex w-full justify-end gap-2"
                >
                    <p
                        id="window-title"
                        className=""
                    >
                        {name}
                    </p>
                    <button onClick={() => setEnlarged(false)}>Close</button>
                </div>
                <p>This is {name.toLowerCase()}'s fullscreen resource page.</p>
                <p>Description:</p>
                <p>{description}</p>
            </div>
        );
    }

    return enlarged ? createEnlarged() : createThumbnail();
}
