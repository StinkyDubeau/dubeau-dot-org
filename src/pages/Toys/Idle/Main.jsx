import Frame from "../../../components/Frame";
import { useState, useEffect } from "react";
import vagueTime from "vague-time";
import Panel from "../../../components/Panel";
import { motion } from "framer-motion";
import Button from "./Components/Button";

import Ver2UI from "./Tiles/Ver2UI";
import Slider from "./Components/Slider";
import Ver1UI from "./Tiles/Ver1UI";

export default function Main(props) {
    const [systemState, setSystemState] = useState("net zero");
    const [generation, setGeneration] = useState(100); // In watts
    const [capacity, setCapacity] = useState(100); // In joules
    const [maximumCapacity, setMaximumCapacity] = useState(10000); // In joules, should convert to kWh for display.
    const [load, setLoad] = useState(100); // In watts
    const [maximumLoad, setMaximumLoad] = useState(1000); // In Watts, default 1kW
    const [output, setOutput] = useState(0); // In joules,  system net output (or input if negative)
    const [flow, setFlow] = useState(0); // Instantaneous power use (watts)
    const [godmode, setGodmode] = useState(false); // Whether to check for lack of capacity, or just keep running the simulation

    const [birthDate, setBirthdate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [ticks, setTicks] = useState(0); //start at 0 ticks.
    const [mspt, setMspt] = useState(1000); // how many milliseconds per tick. 1000mspt = 1tps

    // TODO: SUMMARY TILE
    // It will effectively be a user account page.
    // It will feature account name, profile image (generated like in p2p chat)

    const [timestep, setTimestep] = useState(1); // E.g. 0.5x speed, 2x speed. This multiple is applied to deltaT itself, and thus dictates the simulation speed of the game.

    // TODO: Rethink this. I believe setInterval() is what's preventing input during frame changes.
    // Instead, maybe let's just check for irl time to change, and calculate DeltaT.

    // Electric simulation here. Code should run once per second. Currently, it runs once per mspt.
    useEffect(() => {
        const interval = setInterval(() => {
            var newTicks = ticks + timestep;

            switch (systemState) {
                case 0: // Balanced
                    break;
                case 1: // Discharging
                    setCapacity(capacity - load);
                    break;
                case 2: // Charging
                    setCapacity(capacity + generation - load);
                    break;
                case 3: // Insufficient supply
                    setCapacity(0);
                    break;
                case 4:
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
    // States: 0 - Balanced | 1 - Discharging | 2 - charging | 3 - Sagging | 4 - Overloaded
    useEffect(() => {
        if (generation === load) {
            setSystemState(0);
        } else if (load > generation && capacity > load - generation) {
            setSystemState(1);
        } else if (load < generation && capacity < maximumCapacity) {
            setSystemState(2);
        } else if (load > generation && capacity < load - generation) {
            setSystemState(3);
        } else if (generation > load && capacity >= maximumCapacity) {
            setSystemState(4);
        } else {
            setSystemState(5); // Error
        }
    }, [capacity]);

    // Helper functions
    function getVagueTimeSince(date) {
        return vagueTime.get({
            to: date,
        });
    }

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

    function tick() {}

    function Header() {
        return (
            <div className="flex w-full flex-nowrap gap-2 bg-lighten-800 p-2 text-xs">
                <div className="flex flex-nowrap gap-2">
                    <p>Supported display sizes:</p>
                    <p className="min-xs:hidden xs:hidden">Too small!</p>
                    <p className="max-xs:hidden">xs,</p>
                    <p className="max-sm:hidden">sm,</p>
                    <p className="max-md:hidden">md,</p>
                    <p className="max-lg:hidden">lg,</p>
                    <p className="max-xl:hidden">& xl</p>
                </div>
                <p className="flex-1 text-right">{window.innerWidth} pixels</p>
            </div>
        );
    }

    function Footer() {
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
                className="flex-1"
            >
                {page}
            </div>
        );
    }

    function PaginatedTileRenderer(props) {
        const [pages, setPages] = useState(props.children);
        const [index, setIndex] = useState(0);

        function decrement() {
            // Do not lower the index if we're already on the first page.
            index > 0 && setIndex(index - 1);
        }

        function increment() {
            index < pages.length && setIndex(index + 1);
        }

        return (
            <div
                id="container"
                className="flex flex-col gap-2"
            >
                <div
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
                </div>
                <div
                    id="pages"
                    className="flex w-screen justify-center gap-2 bg-pink-400 p-2 max-sm:flex-col"
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
            <Header />
            <div className="flex w-screen justify-center gap-2 font-header text-darken-700">
                <div className="flex flex-col gap-2 bg-blue-400">
                    <PaginatedTileRenderer>
                        {/* <Ver1UI
                            setLoad={setLoad}
                            load={load}
                            setCapacity={setCapacity}
                            capacity={capacity}
                            maximumCapacity={maximumCapacity}
                        /> */}
                        <Ver2UI
                            setLoad={setLoad}
                            load={load}
                            setCapacity={setCapacity}
                            capacity={capacity}
                            flow={flow}
                            production={output}
                        />
                    </PaginatedTileRenderer>
                </div>
            </div>
            <Footer />
        </Frame>
    );
}
