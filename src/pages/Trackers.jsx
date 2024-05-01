import Frame from "../components/Frame";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

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
        <Frame data={props.data} vignette>
            <div className="mt-12 flex max-w-lg flex-col gap-2 rounded-3xl bg-lighten-800 p-4 text-darken-800 shadow-lg">
                <p>This is the trackers page</p>
                <p>Splat: {useParams()[1]}</p>

                <ul>
                    <li>{data && Object.values(data).toString()}</li>
                </ul>
                <div className="flex justify-center gap-2 text-darken-800">
                    <button
                        className="w-36 rounded-xl  bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
                        onClick={() => {
                            setData({ ...data, One: data.One + 1 });
                        }}
                    >
                        Add local scope
                    </button>
                    <button
                        className="w-36 rounded-xl  bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
                        onClick={() => {
                            props.setData({
                                ...props.data,
                                One: props.data.One + 1,
                            });
                        }}
                    >
                        Add global scope
                    </button>
                </div>
                <div className="flex justify-center gap-2 text-darken-800">
                    <button
                        className="w-36 rounded-xl  bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
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
                        className="w-36 rounded-xl  bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
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
                        placeholder="Enter a loading message (optional)"
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
                        className="w-36 rounded-xl bg-green-500 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
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
                        className="w-36 rounded-xl bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
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
                <Link
                    className="w-74 rounded-xl bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
                    to="/astros"
                >
                    Go to /astros
                </Link>
            </div>
        </Frame>
    );
}
