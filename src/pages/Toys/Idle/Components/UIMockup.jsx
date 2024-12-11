import { useState } from "react";
import InnerCard from "./InnerCard";
import OuterCard from "./OuterCard";

export default function UIMockup(props) {
    const [focus, setFocus] = useState(0); // 0: Capacitors, 1: Generators, 2: Loads

    return (
        <div className="font-regular text-darken-800">
            <p className="text-darken-800">UI Mockup</p>

            <OuterCard className="flex justify-stretch gap-2 bg-lighten-800">
                <div
                    id="totals"
                    className="flex-0 flex flex-col gap-2 p-2"
                >
                    <p>Network Summary</p>
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
                    id="paginated-area"
                    className="flex flex-1 flex-col gap-2 p-2"
                >
                    <p>Focus</p>
                    <InnerCard
                        id="test-page"
                        className="h-max w-max bg-darken-100"
                    >
                        <p>This is a test page.</p>
                    </InnerCard>
                </div>
            </OuterCard>
        </div>
    );
}
