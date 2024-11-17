import { motion } from "framer-motion";
import Button from "../Components/Button";
import Slider from "../Components/Slider";
import ManualDynamo from "../Components/ManualDynamo";

export default function Ver1UI({ capacity, setCapacity, load, setLoad, maximumCapacity }) {
    return (
        <motion.div
            layoutId="modal"
            className="flex max-w-screen-md flex-col gap-2 overflow-hidden rounded-3xl bg-orange-400 p-2 sm:bg-green-500 sm:p-8"
        >
            <h1 className="text-3xl">Ver1.1</h1>
            <p>Capacity: {capacity} joules</p>
            <Button
                body="Turn manual dynamo"
                onClick={() => setCapacity(capacity + 1)}
            />
            <div className="flex flex-col justify-center">
                <div className="flex justify-around gap-2 rounded-xl bg-darken-200 p-2 max-sm:flex-col">
                    <p>Set arbitrary capacity</p>
                    <Slider
                        onChange={setCapacity}
                        value={capacity}
                        min={0}
                        max={maximumCapacity}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex justify-around gap-2 rounded-xl bg-darken-200 p-2 max-sm:flex-col">
                    <p>Set arbitrary load</p>
                    <Button
                        body="-5"
                        onClick={() => setLoad(load - 5)}
                    />
                    <Button
                        body="-1"
                        onClick={() => setLoad(load - 1)}
                    />
                    <Button
                        body="+1"
                        onClick={() => setLoad(load + 1)}
                    />
                    <Button
                        body="+5"
                        onClick={() => setLoad(load + 5)}
                    />

                    <Slider
                        onChange={setLoad}
                        value={load}
                        min={0}
                        max={1000}
                    />
                </div>
            </div>
            <ManualDynamo />
        </motion.div>
    );
}
