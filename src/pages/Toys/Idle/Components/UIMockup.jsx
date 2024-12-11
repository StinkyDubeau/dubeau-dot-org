// Dependencies
import { useState } from "react";

// Components
import InnerCard from "./InnerCard";
import OuterCard from "./OuterCard";
import Button from "./Button";

export default function UIMockup(props) {
    const [focus, setFocus] = useState(0); // 0: Capacitors, 1: Generators, 2: Loads

    return (
        <div className="my-4 flex flex-col gap-2 text-left font-regular text-darken-800">
            <p className="text-darken-800">
                Idle Game UI Mockups. No functionality here.
            </p>

            <OuterCard
                id="network-monitor"
                className=" bg-lighten-800"
            >
                <p className="text-left underline">Network Monitor</p>
                <div className="flex justify-stretch gap-2">
                    <div id="focus-indicator"></div>

                    <div
                        id="focus-selector"
                        className="flex-0 flex flex-col gap-2 p-2"
                    >
                        <p>Focus Selector</p>
                        <InnerCard className="aspect-square bg-green-100">
                            <h1>Total Capacitance</h1>
                            <h2>{0}</h2>
                        </InnerCard>
                        <InnerCard className="aspect-square bg-yellow-100">
                            <h1>Total Generation</h1>
                            <h2>{0}</h2>
                        </InnerCard>
                        <InnerCard className="aspect-square bg-red-100">
                            <h1>Total Consumption</h1>
                            <h2>{0}</h2>
                        </InnerCard>
                    </div>

                    <div
                        id="focus-viewer"
                        className="flex flex-1 flex-col gap-2 p-2"
                    >
                        <p>Focus Viewer</p>
                        <InnerCard
                            id="test-page"
                            className="bg-darken-100"
                        >
                            <p>This is a test page.</p>
                        </InnerCard>
                    </div>
                </div>
            </OuterCard>

            <OuterCard
                id="node-creator"
                className="bg-lighten-800"
            >
                <p className="text-left underline">Node Creator</p>
                <div
                    id="size-options"
                    className="flex flex-col gap-2 "
                >
                    <div className="flex justify-center gap-2">
                        <div
                            id="radio-button"
                            className=""
                        >
                            <input
                                type="radio"
                                name="radio-1"
                                className="h-12"
                            />
                            SM
                        </div>
                        <div
                            id="radio-button"
                            className=""
                        >
                            <input
                                type="radio"
                                name="radio-1"
                                className="h-12"
                                defaultChecked
                            />
                            MD
                        </div>
                        <div
                            id="radio-button"
                            className=""
                        >
                            <input
                                type="radio"
                                name="radio-1"
                                className="h-12"
                            />
                            LG
                        </div>
                        <div
                            id="radio-button"
                            className=""
                        >
                            <input
                                type="radio"
                                name="radio-1"
                                className="h-12"
                            />
                            XL
                        </div>
                        
                    </div>
                    
                </div>
                <div
                    id="instantiate-buttons"
                    className="flex flex-col gap-2"
                >
                    <p className="text-left">Instantiate</p>

                    <div className="flex justify-center gap-2">
                        <Button
                            onClick={() => console.log("Button was clicked.")}
                            className="rounded-xl bg-green-100 p-2 shadow"
                            body="Capacitor"
                        />

                        <Button
                            onClick={() => console.log("Button was clicked.")}
                            className="rounded-xl bg-yellow-100 p-2 shadow"
                            body="Generator"
                        />
                        <Button
                            onClick={() => console.log("Button was clicked.")}
                            className="rounded-xl bg-red-100 p-2 shadow"
                            body="Consumer"
                        />
                    </div>
                </div>
            </OuterCard>
        </div>
    );
}
