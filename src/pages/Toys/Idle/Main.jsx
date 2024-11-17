import Frame from "../../../components/Frame";
import { useState, useEffect } from "react";
import vagueTime from "vague-time";
import Panel from "../../../components/Panel";
import { motion } from "framer-motion";
import Button from "./Components/Button";

import Ver2UI from "./Tiles/Ver2UI";
import Slider from "./Components/Slider";

export default function Main(props) {
    const [systemState, setSystemState] = useState("net zero");
    const [generation, setGeneration] = useState(100); // In watts
    const [capacity, setCapacity] = useState(100); // In joules
    const [load, setLoad] = useState(100); // In watts
    const [godmode, setGodmode] = useState(false); // Whether to check for lack of capacity, or just keep running the simulation

    const [birthDate, setBirthdate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [ticks, setTicks] = useState(0); //start at 0 ticks.
    const [mspt, setMspt] = useState(1000); // how many milliseconds per tick. 1000mspt = 1tps

    // TODO: SUMMARY TILE
    // It will effectively be a user account page.
    // It will feature account name, profile image (generated like in p2p chat)
    //

    // -----------------------------------------
    // Timestep Timescale Interdependency
    const [timestep, setTimestep] = useState(1); // E.g. 0.5x speed, 2x speed. This multiple is applied to deltaT itself, and thus dictates the simulation speed of the game.
    const [timescale, setTimescale] = useState(1); // how fast (1x, 2x, 100x, should the simulation run? This will trickle down to mspt.)

    // TODO: Rethink this. I believe setInterval() is what's preventing input during frame changes.
    // Instead, maybe let's just check for irl time to change, and calculate DeltaT.

    // Electric simulation here
    useEffect(() => {
        const interval = setInterval(() => {
            var newTicks = ticks + timestep;

            if (capacity > load) {
                setCapacity(capacity - load); // If generation is less than load, subtract that many watts per second from the capacity.
            }

            setTicks(newTicks);
        }, mspt);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [ticks]);

    // Do every tick
    useEffect(() => {
        setTime(new Date());
    }, [ticks]);

    // Check that system can still provide power
    useEffect(() => {
        if (capacity < load) {
            setSystemState("overloaded");
        } else if (load > capacity) {
            setSystemState("discharging");
        }
    }, [capacity]);

    // Helper functions
    function getVagueTimeSince(date) {
        return vagueTime.get({
            to: date,
        });
    }

    function tick() {}

    function ManualDynamo(props) {
        const [rpm, setRpm] = useState(0);

        function turn(force) {
            setRpm(rpm + force);
        }
    }

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
                <p>System state: {systemState}</p>
                <p>Capacity: {capacity} joules</p>
                <p>Generation: {generation} watts</p>
                <p>Load: {load} watts</p>
                <p>Time: {time.toLocaleTimeString()}</p>
                <p>Spawn time: {birthDate.toLocaleTimeString()}</p>
                <p>Born: {getVagueTimeSince(birthDate)}</p>
            </div>
        );
    }

    function Ver1UI() {
        return (
            <motion.div
                layoutId="modal"
                className="flex max-w-screen-md flex-col gap-2 overflow-hidden rounded-3xl bg-orange-400 p-2 sm:bg-green-500 sm:p-8"
            >
                <h1 className="text-3xl">Ver1.0</h1>
                <p>Capacity: {capacity} watts</p>
                <Button
                    body="Turn manual dynamo"
                    onClick={() => setCapacity(capacity + 1)}
                />
                <div className="flex flex-col justify-center">
                    <div className="flex justify-around gap-2 rounded-xl bg-darken-200 p-2 max-sm:flex-col">
                        <p>Set arbitrary capacity</p>
                        <Slider
                            onChange={setCapacity}
                            value={capacity}
                            min={0}
                            max={1000}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-around gap-2 rounded-xl bg-darken-200 p-2 max-sm:flex-col">
                        <p>Set arbitrary load</p>
                        <Button
                            body="-5"
                            onClick={() => setLoad(load - 5)}
                        />
                        <Button
                            body="-1"
                            onClick={() => setLoad(load - 1)}
                        />
                        <Button
                            body="+1"
                            onClick={() => setLoad(load + 1)}
                        />
                        <Button
                            body="+5"
                            onClick={() => setLoad(load + 5)}
                        />

                        <Slider
                            onChange={setLoad}
                            value={load}
                            min={0}
                            max={1000}
                        />
                    </div>
                </div>
                <ManualDynamo />
            </motion.div>
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

    function PageRenderer(props) {
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
                    {/* Run mapping function only if there is more than one page to be rendered */}
                    {/* {pages.length ? pages.map(renderPage) : renderPage(pages)} */}
                    {renderPage(pages[index])}
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
                    <PageRenderer>
                        <Ver1UI />
                        <Ver2UI
                            setLoad={setLoad}
                            load={load}
                            setCapacity={setCapacity}
                            capacity={capacity}
                        />
                    </PageRenderer>
                </div>
            </div>
            <Footer />
        </Frame>
    );
}
