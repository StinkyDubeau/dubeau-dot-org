import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vagueTime from "vague-time";

import Frame from "../../../components/Frame";
import Panel from "../../../components/Panel";
import Button from "./Components/Button";
import Slider from "./Components/Slider";

import Ver1UI from "./Tiles/Ver1UI";
import Ver2UI from "./Tiles/Ver2UI";

export default function Main(props) {
    const [systemState, setSystemState] = useState("net zero");
    const [generation, setGeneration] = useState(100); // In watts
    const [capacity, setCapacity] = useState(100); // In joules
    const [maximumCapacity, setMaximumCapacity] = useState(10000); // In joules, should convert to kWh for display.
    const [load, setLoad] = useState(100); // In watts
    const [maximumLoad, setMaximumLoad] = useState(1000); // In watts, default 1kW

    const [output, setOutput] = useState(0); // In joules, system net output (or input if negative)
    const [excess, setExcess] = useState(0); //In watts, the delta between generation and load. Optimally, this is zero.

    const [godmode, setGodmode] = useState(false); // Whether to check for lack of capacity, or just keep running the simulation

    const [birthDate, setBirthdate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [ticks, setTicks] = useState(0); //start at 0 ticks.
    const [mspt, setMspt] = useState(1000); // how many milliseconds per tick. 1000mspt = 1tps

    // TODO: SUMMARY TILE
    // It will effectively be a user account page.
    // It will feature account name, profile image (generated like in p2p chat)

    // TODO: All tiles should have a small, glanceable thumbnail.
    // E.G. Power meter tile may just display excess in the thumbnail
    // Expanded, it will show load, capacity, and generation.

    const [timestep, setTimestep] = useState(1); // E.g. 0.5x speed, 2x speed. This multiple is applied to deltaT itself, and thus dictates the simulation speed of the game.

    // TODO: Rethink this. I believe setInterval() is what's preventing input during frame changes.
    // Instead, maybe let's just check for irl time to change, and calculate DeltaT.

    // Electric simulation here.
    //TODO: Code should run once per second. Currently, it runs once per mspt.
    useEffect(() => {
        const interval = setInterval(() => {
            var newTicks = ticks + timestep;

            switch (systemState) {
                case 0: // Balanced
                    setOutput(load);
                    break;
                case 1: // Discharging
                    setCapacity(capacity + excess);
                    setOutput(load);
                    break;
                case 2: // Charging
                    setCapacity(capacity + excess);
                    setOutput(load);
                    break;
                case 3: // Sagging
                    setCapacity(0);
                    setOutput(generation);
                    break;
                case 4: // Overloaded
                    console.log("The system was overloaded!");
                    setOutput(load + excess);
                    setCapacity(maximumCapacity);
                    break;
                case 5:
                    console.error(
                        "systemState should be less than 5. Something is wrong.",
                    );
            }

            setTicks(newTicks);
        }, [mspt]);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [ticks]);

    // Do every tick
    useEffect(() => {
        setTime(new Date());
    }, [ticks, capacity, load]);

    // System State Calculations, ordered by severity
    // States: 0 - Balanced | 1 - Discharging | 2 - Charging | 3 - Sagging | 4 - Overloaded
    useEffect(() => {
        setExcess(generation - load);

        if (excess === 0) {
            // The system is balanced
            setSystemState(0);
        } else if (excess < 0) {
            // Insufficient generation, try to use stored capacity.
            if (capacity + excess > 0) {
                // There is enough stored capacity. We are discharging.
                setSystemState(1);
            } else if (capacity + excess < 0) {
                // There is not enough stored capacity. We are sagging.
                setSystemState(3);
            }
        }
        if (excess > 0) {
            // There is an excess of generation, try to charge capacity.
            if (capacity + excess > maximumCapacity) {
                // No more capacity to charge. We are overloaded.
                setSystemState(4);
            } else {
                // Room to charge. Charging.
                setSystemState(2);
            }
        }
    }, [capacity, load, generation, excess]);

    // Helper functions
    function getVagueTimeSince(date) {
        return vagueTime.get({
            to: date,
        });
    }

    function tick() {}

    function createHeaderComponent() {
        return (
            <div
                id="header"
                className="font-header text-darken-900"
            >
                <p className="p-2">
                    I do not currently know why the fuck everything is
                    re-rendering and bouncing.
                </p>
                <div className="flex w-full gap-2 bg-lighten-800 p-2 text-xs">
                    <div className="flex flex-nowrap gap-2">
                        <p>Supported display sizes:</p>
                        <p className="min-xs:hidden xs:hidden">Too small!</p>
                        <p className="max-xs:hidden">xs,</p>
                        <p className="max-sm:hidden">sm,</p>
                        <p className="max-md:hidden">md,</p>
                        <p className="max-lg:hidden">lg,</p>
                        <p className="max-xl:hidden">& xl</p>
                    </div>
                    <p className="flex-1 text-right">
                        {window.innerWidth} pixels
                    </p>
                </div>
            </div>
        );
    }

    function createFooterComponent() {
        function getVagueState(state) {
            var x = "";

            switch (state) {
                case 0:
                    x = "🌏 Balanced";
                    break;
                case 1:
                    x = "🪫 Discharging";
                    break;
                case 2:
                    x = "🔋 Charging";
                    break;
                case 3:
                    x = "⚠️ Sagging";
                    break;
                case 4:
                    x = "💥 Overloaded";
                    break;
                case 5:
                    x = "❓ An error occurred.";
                    break;
            }

            return x;
        }

        return (
            <div className="flex w-full justify-around gap-2 bg-lighten-800 text-darken-800 max-sm:flex-col sm:gap-6">
                <Panel className="flex flex-col flex-wrap justify-center sm:p-2">
                    <p className="text-nowrap">System state: {systemState}</p>
                    <p className="text-nowrap">{getVagueState(systemState)}</p>
                </Panel>
                <p>
                    Capacity: {capacity}/{maximumCapacity} joules
                </p>
                <p>Generation: {generation} watts</p>
                <p>
                    Load: {load}/{maximumLoad} watts
                </p>
                <p>Time: {time.toLocaleTimeString()}</p>
                <p>Spawn time: {birthDate.toLocaleTimeString()}</p>
                <p>Born: {getVagueTimeSince(birthDate)}</p>
            </div>
        );
    }

    function renderPage(page, index) {
        return (
            <div
                key={index}
                className=""
            >
                {page}
            </div>
        );
    }

    function createPaginatedTileRendererComponent(tiles) {
        const [pages, setPages] = useState(tiles);
        const [index, setIndex] = useState(0);

        function decrement() {
            // Do not lower the index if we're already on the first page.
            index > 0 && setIndex(index - 1);
        }

        function increment() {
            index + 1 < pages.length && setIndex(index + 1);
        }

        return (
            <div
                id="container"
                className="flex flex-col gap-2"
            >
                <Panel
                    id="controls"
                    className="flex justify-around gap-2"
                >
                    {/* Display the number of pages, or "1 page" if pages is not an array. */}
                    <Button
                        body="Previous"
                        className="font-header font-bold text-darken-800"
                        onClick={decrement}
                    />
                    {pages.length ? `${index + 1}/${pages.length}` : "1/1"}
                    {/* {pages.map((page, index) => {
                        <Button
                            key={index}
                            body={index}
                        />;
                    })} */}
                    <Button
                        body="Next"
                        className="font-header font-bold text-darken-800"
                        onClick={increment}
                    />
                </Panel>
                <div
                    id="pages"
                    className="flex w-screen justify-center gap-2 bg-pink-400 p-2"
                >
                    {/* Render the chosen tile */}
                    {pages.length
                        ? renderPage(pages[index])
                        : renderPage(pages)}
                </div>
            </div>
        );
    }

    function TestPage(props) {
        return (
            <>
                <Panel className="p-2">
                    <p>Test Page</p>
                </Panel>
            </>
        );
    }

    return (
        <Frame
            data={props.data}
            noScroll
        >
            <p>Test</p>
            <Button body="Test" />
            {createHeaderComponent()}
            <div className="flex w-screen justify-center gap-2 font-header text-darken-700">
                <div className="flex flex-col gap-2 bg-blue-400">
                    {createPaginatedTileRendererComponent([
                        <TestPage />,
                        Ver1UI,
                        <Ver2UI
                            setLoad={setLoad}
                            load={load}
                            setCapacity={setCapacity}
                            capacity={capacity}
                            output={output}
                            generation={generation}
                            setGeneration={setGeneration}
                            excess={excess}
                        />,
                    ])}
                </div>
            </div>
            {createFooterComponent()}
        </Frame>
    );
}
