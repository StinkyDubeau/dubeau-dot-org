import { useState, cloneElement } from "react";
import { useLocation, useOutlet } from "react-router-dom";
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

    const { pathname } = useLocation();
    const element = useOutlet();

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
                initial={{}}
                animate={{ opacity: 1, scale: 1 }}
                exit={{}}
                onClick={() => setEnlarged(true)}
                className="flex rounded-xl bg-darken-200 p-1"
            >
                <motion.img
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    className="h-6"
                    src={img}
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    {name}: {count} {unit}
                </motion.p>
            </motion.button>
        );
    }

    function CreateEnlarged() {
        return (
            <motion.div
                initial={{ height: 32 }}
                animate={{ height: "auto" }}
                exit={{ height: 32 }}
                className="z-30 overflow-hidden rounded-xl bg-darken-200 bg-contain text-left"
            >
                <motion.div
                    exit={{ x: -100 }}
                    className="flex gap-3"
                >
                    <motion.img
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="h-24"
                        src={img}
                    />
                    <div
                        id="content"
                        className="ml-2"
                    >
                        <motion.button
                            onClick={() => setEnlarged(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            id="window-title"
                            className="overflow-hidden text-xl font-bold"
                        >
                            {count} {name.toLowerCase()}
                        </motion.button>
                        <p>About {name.toLowerCase()}:</p>
                        <p>{description}</p>
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            {enlarged && cloneElement(<CreateEnlarged />, { key: "a" })}
            {!enlarged && cloneElement(<CreateThumbnail />, { key: "b" })}
        </AnimatePresence>
    );
}
