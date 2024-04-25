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
            <p className="mt-12">This is the trackers page</p>
            <div>
                <ul>
                    <li>{data && Object.values(data).map(createPrimitive)}</li>
                </ul>
                <button
                    onClick={() => {
                        setData({ ...data, One: data.One + 1 });
                    }}
                >
                    Add
                </button>
                {/* {console} */}
            </div>
        </Frame>
    );
}
