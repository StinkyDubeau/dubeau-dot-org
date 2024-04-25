import Frame from "../components/Frame";
import { useState } from "react";

export default function Trackers(props) {
    // Function to input from JSON

    // Function to output to JSON
    //  Save JSON to DB

    const [data, setData] = useState(props.data);

    data &&
        Object.values(data).map((key, index) => {
            console.log(key);
        });

    function createPrimitive(prim, index) {
        return (
            <div key={index}>
                <p>{Object.values(prim)}</p>
            </div>
        );
    }

    return (
        <Frame data={props.data}>
            <div className="mt-12 flex max-w-lg flex-col gap-2 rounded-3xl bg-white p-4 text-darken-800 shadow-lg">
                <p>This is the trackers page</p>

                <ul>
                    <li>{data && Object.values(data)}</li>
                </ul>
                <div className="flex justify-center gap-2 text-darken-800">
                    <button
                        className="w-36 rounded-xl border border-darken-200 bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
                        onClick={() => {
                            setData({ ...data, One: data.One + 1 });
                        }}
                    >
                        Add local scope
                    </button>
                    <button
                        className="w-36 rounded-xl border border-darken-200 bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
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
                        className="w-36 rounded-xl border border-darken-200 bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
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
                        className="w-36 rounded-xl border border-darken-200 bg-lighten-800 p-2 text-darken-800 shadow-md transition-all hover:scale-105 hover:bg-lighten-900 hover:shadow-lg"
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
            </div>
        </Frame>
    );
}
