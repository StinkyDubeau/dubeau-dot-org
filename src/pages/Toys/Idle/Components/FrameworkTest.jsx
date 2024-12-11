// Dependencies
import { useState } from "react";

// Components
import InnerCard from "./InnerCard";
import OuterCard from "./OuterCard";
import Button from "./Button";
import RadioButton from "./RadioButton";

import Network from "../Framework/Network.js"

export default function FrameworkTest(props) {
    const [focus, setFocus] = useState(0); // 0: Capacitors, 1: Generators, 2: Loads
    const testNetwork = new Network()

    return (
        <div className="my-4 flex flex-col gap-2 text-left font-regular text-darken-800">
            <p></p>
        </div>
    );
}
