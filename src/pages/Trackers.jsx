import Frame from "../components/Frame";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Panel from "../components/Panel";

import { motion } from "framer-motion";

export default function Trackers(props) {
    // Function to input from JSON

    // Function to output to JSON
    //  Save JSON to DB

    const [data, setData] = useState(props.data);

    data &&
        Object.values(data).map((key, index) => {
            console.log(key);
        });

    return (
        <Frame
            data={props.data}
            vignette
        >
            <div className="flex h-screen w-full flex-col justify-center pb-32">
                <motion.div
                    layoutId="Experimental"
                    className="m-4 flex max-w-96 flex-col gap-2 rounded-2xl bg-lighten-900 p-4 text-left font-header text-darken-800"
                >
                    <h1 className="text-center text-3xl font-light">
                        ⚙️ Experiments
                    </h1>
                    <p className="">
                        Click{" "}
                        <span className="font-semibold text-green-500">
                            Activate Experimental
                        </span>{" "}
                        and return to the{" "}
                        <a
                            href="/fun"
                            className="font-semibold"
                        >
                            playground
                        </a>{" "}
                        page. You'll find several new links and features there,
                        and sitewide.
                    </p>

                    <div className="flex gap-2 text-darken-800">
                        <button
                            className="w-full rounded-xl bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
                            onClick={() => {
                                setData({ ...data, One: data.One + 1 });
                            }}
                        >
                            Add to local scope <br />{" "}
                            <span className="">(Page data)</span>
                        </button>
                        <button
                            className="w-full rounded-xl bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
                            onClick={() => {
                                props.setData({
                                    ...props.data,
                                    One: props.data.One + 1,
                                });
                            }}
                        >
                            Add to global scope <br />{" "}
                            <span className="">(Session data)</span>
                        </button>
                    </div>
                    <div className="flex justify-center gap-2 text-darken-800">
                        <button
                            className="w-full rounded-xl  bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
                            onClick={() => {
                                props.setData({
                                    ...props.data,
                                    loading: true,
                                });
                            }}
                        >
                            Start 'loading'...
                        </button>
                        <button
                            className="w-full rounded-xl  bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
                            onClick={() => {
                                props.setData({
                                    ...props.data,
                                    loading: false,
                                });
                            }}
                        >
                            Stop 'loading'...
                        </button>
                    </div>
                    {props.data.loading && (
                        <textarea
                            className="rounded-xl bg-darken-50  p-2"
                            placeholder="Enter a loading message..."
                            value={props.data.loading.text}
                            onChange={(e) => {
                                props.setData({
                                    ...props.data,
                                    loading: { text: e.target.value },
                                });
                            }}
                        ></textarea>
                    )}
                    <div className="flex justify-center gap-2 text-darken-800">
                        <button
                            className="w-full rounded-xl bg-green-500 p-2 font-semibold text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-green-100 hover:shadow-lg"
                            onClick={() => {
                                props.setData({
                                    ...props.data,
                                    experimental: true,
                                });
                            }}
                        >
                            Activate Experimental
                        </button>
                        <button
                            className="w-full rounded-xl bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
                            onClick={() => {
                                props.setData({
                                    ...props.data,
                                    experimental: false,
                                });
                            }}
                        >
                            Disable Experimental
                        </button>
                    </div>

                    <p className="text-nowrap font-header">
                        Splat: {useParams()[1] ? useParams()[1] : "None"}
                    </p>

                    <ul>
                        <li className="text-nowrap font-header">
                            Local scope:{" "}
                            {data &&
                                Object.values(data).map((value) => (
                                    <p>{value.toString()}</p>
                                ))}
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Frame>
    );
}
