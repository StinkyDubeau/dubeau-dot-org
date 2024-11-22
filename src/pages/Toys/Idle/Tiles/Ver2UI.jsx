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
    output,
    excess,
}) {
    function RenderIntegerInput({ onChange, value, body, unit }) {
        return (
            <div className="flex justify-stretch gap-2 max-sm:flex-col">
                <p className="my-auto flex-1 text-left">{body}</p>
                <IntegerInput
                    className="flex-0 rounded-xl bg-darken-200 p-2 text-right"
                    onChange={onChange}
                    value={value}
                />
                <p className="flex-0 my-auto text-right">{unit && unit}</p>
            </div>
        );
    }

    function RenderInteger({ value, body, unit }) {
        return (
            <div className="flex justify-stretch gap-2 max-sm:flex-col">
                <p className="my-auto flex-1 text-left">{body}</p>
                <p className="my-auto flex-1 text-right">{value}</p>
                <p className="flex-0 my-auto text-right">{unit && unit}</p>
            </div>
        );
    }

    return (
        <motion.div
            layoutId="modal"
            className="flex max-w-screen-md flex-col overflow-hidden rounded-3xl bg-orange-400 p-2 sm:gap-12 sm:bg-green-500 sm:p-8"
        >
            <h1 className="text-3xl">dev controller v2</h1>
            <RenderIntegerInput
                value={capacity}
                onChange={setCapacity}
                body="Capacity"
                unit="joules"
            />
            <RenderIntegerInput
                value={generation}
                onChange={setGeneration}
                body="Generation"
                unit="watts"
            />
            <RenderIntegerInput
                value={load}
                onChange={setLoad}
                body="Load"
                unit="watts"
            />
            <RenderInteger
                value={excess}
                body="Excess"
                unit="Watts"
            />
            <RenderInteger
                value={output}
                body="Output"
                unit="Watts"
            />
            <p className="my-auto flex-1 text-left">Datatypes:</p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs max-sm:flex-col">
                <p className="border border-darken-400 p-0.5">
                    load: {typeof load} | setLoad: {typeof setLoad}
                </p>
                <p className="border border-darken-400 p-0.5">
                    capacity: {typeof capacity} | setCapacity:{" "}
                    {typeof setCapacity}
                </p>
                <p className="border border-darken-400 p-0.5">
                    generation: {typeof generation} | setGeneration:{" "}
                    {typeof setGeneration}
                </p>
            </div>
        </motion.div>
    );
}
