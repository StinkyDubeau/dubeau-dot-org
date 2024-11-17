import { motion } from "framer-motion";
import Button from "../Components/Button";
import IntegerInput from "../Components/IntegerInput";

export default function Ver2UI({
    load,
    setLoad,
    capacity,
    setCapacity,
    generation,
    setGeneration,
}) {
    function RenderIntegerInput({ onChange, value, body }) {
        return (
            <div className="flex justify-stretch gap-2 max-sm:flex-col">
                <p className="my-auto flex-1 text-left">{body}</p>
                <IntegerInput
                    className="flex-0 rounded-xl bg-darken-200 p-2"
                    onChange={onChange}
                    value={value}
                />
            </div>
        );
    }

    return (
        <motion.div
            layoutId="modal"
            className="flex max-w-screen-md flex-col gap-2 overflow-hidden rounded-3xl bg-orange-400 p-2 sm:bg-green-500 sm:p-8"
        >
            <h1 className="text-3xl">dev controller v2</h1>
            <RenderIntegerInput
                value={capacity}
                onChange={setCapacity}
                body="Capacity"
            />
            <RenderIntegerInput
                value={generation}
                onChange={setGeneration}
                body="Generation"
            />
            <RenderIntegerInput
                value={load}
                onChange={setLoad}
                body="Load"
            />
        </motion.div>
    );
}
