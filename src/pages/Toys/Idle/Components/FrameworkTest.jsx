// Dependencies
import { useState } from "react";

// Components
import InnerCard from "./InnerCard";
import OuterCard from "./OuterCard";
import Button from "./Button";
import RadioButton from "./RadioButton";

import Network from "../Framework/Network.js";
import Node from "../Framework/Node.js";

export default function FrameworkTest(props) {
    const [focus, setFocus] = useState(0); // 0: Capacitors, 1: Generators, 2: Loads
    const testNetwork = new Network([new Node(), new Node()]);

    function renderNode(node) {
        return (
            <div key={node.uuid}>
                <p>Node {node.uuid}</p>
            </div>
        );
    }

    return (
        <div className="my-4 flex flex-col gap-2 text-left font-regular text-darken-800">
            <div className="flex flex-col gap-2">
                {testNetwork.nodes.map(renderNode)}
            </div>
        </div>
    );
}
