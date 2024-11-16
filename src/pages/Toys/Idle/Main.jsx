import Frame from "../../../components/Frame";
import { useState, useEffect } from "react";
import vagueTime from "vague-time";
import Panel from "../../../components/Panel";
import { motion } from "framer-motion";

export default function Main(props) {
    const [peakCapacity, setPeakCapacity] = useState(100); // In watts
    const [capacity, setCapacity] = useState(100); // In watts
    const [load, setLoad] = useState(100); // In watts
    const [stored, setStored] = useState(100); // In joules
    const [godmode, setGodmode] = useState(false); // Whether to check for lack of capacity, or just keep running the simulation

    const [birthDate, setBirthdate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [ticks, setTicks] = useState(0); //start at 0 ticks.
    const [mspt, setMspt] = useState(1000); // how many milliseconds per tick
    const [timestep, setTimestep] = useState(1); // how many ticks to advance per tick.
    const [timescale, setTimescale] = useState(1); // how fast (1x, 2x, 100x, should the simulation run? This will trickle down to mspt.)

    // TODO: Rethink this. I believe setInterval() is what's preventing input during frame changes.
    // Instead, maybe let's just check for irl time to change, and calculate DeltaT.
    // Game loop logic is here
    useEffect(() => {
        const interval = setInterval(() => {
            var newTicks = ticks + timestep;

            if (capacity > load) {
                setCapacity(capacity - load); // If capacity is insufficient, subtract the load from the stored power
            }

            setTicks(newTicks);
        }, mspt / timescale);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [ticks]);

    // Do every tick
    useEffect(() => {
        setTime(new Date());
    }, [ticks]);

    // Update timescale
    useEffect(() => {
        console.log(`Changing timescale to ${timescale}. Old mspt = ${mspt}`);
    }, [timescale]);

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

    function Button({ body, onClick }) {
        return (
            <button
                className="rounded-2xl bg-lighten-800 p-2 font-header text-darken-800 transition-all hover:bg-lighten-900 active:bg-lighten-200"
                onClick={onClick}
            >
                {body}
            </button>
        );
    }

    function Slider({ min, max, value, step, onChange }) {
        return (
            <input
                type="range"
                onChange={(e) => onChange(e.target.value)}
                min={min}
                max={max}
                value={value}
                step={step ? step : 1} // Move 1 unit per pixel unless otherwise specified
                className="range fill-lighten-800 text-lighten-800 sm:flex-1"
            />
        );
    }

    function Header() {
        return <div className="w-full bg-lighten-800">Header</div>;
    }

    function Footer() {
        return (
            <div className="flex w-full justify-around gap-2 bg-lighten-800 text-darken-800 max-sm:flex-col sm:gap-6">
                <p>Capacity: {capacity} watts</p>
                <p>Load: {load} watts</p>
                <p>Stored energy: {stored} joules</p>
                <p>Time: {time.toLocaleTimeString()}</p>
                <p>Spawn time: {birthDate.toLocaleTimeString()}</p>
                <p>Born: {getVagueTimeSince(birthDate)}</p>
            </div>
        );
    }

    function UI() {
        return (
            <div className="flex max-w-screen-md flex-col gap-2 overflow-hidden rounded-3xl bg-orange-400 p-2 sm:bg-green-500  sm:p-8">
                <h1 className="text-3xl">Idle Clicker</h1>
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
            </div>
        );
    }

    function renderPage(page, index) {
        return (
            <motion.div
                animate={{ x: 100, opacity: 1 }}
                className="flex-1"
                key={index}
            >
                {page}
            </motion.div>
        );
    }

    function PageRenderer(props) {
        const [pages, setPages] = useState(props.children);
        const [index, setIndex] = useState(pages.length);

        return (
            <div
                id="container"
                className="flex flex-col gap-2"
            >
                <div
                    id="controls"
                    className="flex justify-between gap-2"
                >
                    <Button
                        body="Next"
                        className="font-header font-bold text-darken-800"
                    />
                </div>
                <div
                    id="pages"
                    className="flex w-screen justify-center gap-2 bg-blue-400 p-2 max-sm:flex-col"
                >
                    {pages.map(renderPage)}
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
                <div className="flex flex-col gap-2">
                    <PageRenderer>
                        <UI />
                        <UI />
                        <TestPage />
                    </PageRenderer>
                </div>
            </div>
            <Footer />
        </Frame>
    );
}
