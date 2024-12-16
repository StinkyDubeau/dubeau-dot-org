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
    const testNetwork = new Network();

    // Helper Functions
    function addTestNodesToNetwork(network, n) {
        const nodesToAdd = [];

        while (n > 0) {
            const node = new Node(network, null, 100, 100, 100, false);
            nodesToAdd.push(node);
            n -= 1;
        }
        network.addNodesToNetwork(nodesToAdd);
        console.log(network.nodes);
    }

    // Render Functions
    function renderOneNetwork(network) {
        return (
            <OuterCard
                key={network.uuid}
                className="bg-lighten-800"
            >
                <p>Network: {network.uuid}</p>
                <ul className="flex flex-col gap-2">
                    {/* {testNetwork.nodes.map(renderOneNode)} */}
                    {renderOneNode(
                        network.nodes[0] ? network.nodes[0] : new Node(network),
                    )}
                </ul>
                <Button
                    className="w-full rounded-xl bg-lighten-800 p-2 shadow"
                    body="Add nodes"
                    onClick={() => addTestNodesToNetwork(network, 5)}
                />
            </OuterCard>
        );
    }

    function renderOneNode(node) {
        return (
            <InnerCard
                key={node.uuid}
                className="bg-darken-100"
            >
                <p>Node: {node.uuid}</p>
                <p>Parent: {node.network.uuid}</p>
                <p>Capacitance: {node.capacitance}</p>
                <p>Generation: {node.generation}</p>
                <p>Consumption: {node.consumption}</p>
            </InnerCard>
        );
    }

    return (
        <div className="my-4 flex flex-col gap-2 text-left font-regular text-darken-800">
            <div className="flex flex-col gap-2">
                <h1>Networks:</h1>
                {renderOneNetwork(testNetwork)}
            </div>
        </div>
    );
}
