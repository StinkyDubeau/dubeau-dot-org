import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import defaultImg from "../../../../assets/coin.png";

export default function Resource(props) {
    // The interface of a resource:
    // - name: string
    // - img: image file
    // - count: number
    // - description: string
    // - unit: string
    // - enlarged: boolean

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

    function CreateThumbnail() {
        return (
            <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 2 }}
                onClick={() => setEnlarged(true)}
                className="flex rounded-xl bg-darken-200 p-1"
            >
                <img
                    className="h-6"
                    src={img}
                />
                {name}: {count} {unit}
            </motion.button>
        );
    }

    function CreateEnlarged() {
        return (
            <motion.div
                initial={{ opacity: 0.85, height: 32 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 32 }}
                className="z-30 overflow-hidden rounded-xl bg-darken-200 bg-contain text-left"
            >
                <div
                    id="content"
                    className="ml-2"
                >
                    <motion.button
                        onClick={() => setEnlarged(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        exit={{ width: 0 }}
                        id="window-title"
                        className="text-xl font-bold"
                    >
                        {count} {name.toLowerCase()}
                    </motion.button>
                    <p>About {name.toLowerCase()}:</p>
                    <p>{description}</p>
                </div>
            </motion.div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            {enlarged && <CreateEnlarged />}
            {!enlarged && <CreateThumbnail />}
        </AnimatePresence>
    );
}
