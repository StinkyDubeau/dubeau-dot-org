import { useEffect, useState } from "react";
import Frame from "../../components/Frame";
import { Link } from "react-router-dom";
import vagueTime from "vague-time";
import Checkbox from "../../components/Checkbox";

export default function (props) {
    // Widgets are:
    // - Rich: Strong design that's engagingly animated
    // - Connected: Backed by a secure connection to others
    // - Responsive: From centimeters to fullscreen, they scale

    // TODO:
    // - Cannot click purchase buttons while the game is mid-tick. This is problematic at fast simulation speeds. (>250ms)

    function createVoltageWidget() {
        const [time, setTime] = useState(new Date());
        const [ticks, setTicks] = useState(0);
        const [mspt, setMspt] = useState(500); // ms per tick
        const [timestep, setTimestep] = useState(1); //ticks per mspt

        const [voltage, setVoltage] = useState(12);
        const [current, setCurrent] = useState(0); // Current in Watts

        const [generators, setGenerators] = useState([]);
        const [loads, setLoads] = useState([]);

        function addGenerator() {}

        function addLoad() {}

        // Game loop logic is here
        useEffect(() => {
            const interval = setInterval(() => {
                var newTime = new Date();
                var newTicks = ticks + timestep;

                setTicks(newTicks);

                console.log(
                    `Tick! (${ticks}) (${mspt}ms) (${newTime.toLocaleTimeString()})`,
                );
            }, mspt);

            return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
        }, [ticks]);

        // Run per tick
        useEffect(() => {
            console.log(`Tick! (${ticks}) (${time})`);
        }, [ticks]);

        function renderStatistics() {
            return (
                <div
                    id="statistics"
                    className="flex flex-col gap-2 rounded-xl bg-darken-200 p-2 font-header text-sm text-lighten-700"
                >
                    <h1 className="text-left underline">Statistics</h1>
                    <p className="">Voltage: {voltage}</p>
                    <p className="">Wattage: {current}</p>
                    <p className="">ticks passed: {ticks}</p>
                    <p className="">
                        tick rate: {1 / (mspt / 1000)} per second, {mspt}ms per
                        tick.
                    </p>
                </div>
            );
        }

        function renderDynamo() {
            const [angle, setAngle] = useState(0);

            function updateDynamo() {}

            return (
                <div
                    id="dynamo"
                    className="flex flex-col gap-2 rounded-xl bg-darken-200 p-2 font-header text-sm text-lighten-700"
                >
                    <h1 className="text-left underline">Dynamo</h1>
                </div>
            );
        }

        return (
            <div className=" flex flex-col gap-2 rounded-3xl bg-green-300 p-6 text-xl text-green-900">
                <h1 className="font-headerScript text-5xl text-green-800">
                    Voltage
                </h1>
                <div className="flex justify-between gap-2 max-sm:flex-col sm:w-full">
                    <button className="min-h-36 min-w-36 rounded-xl bg-green-500 p-6 font-header text-6xl transition-all hover:scale-105 hover:bg-green-600 hover:shadow-lg active:scale-95 active:bg-green-800 active:blur">
                        +
                    </button>
                    {renderStatistics()}
                    {renderDynamo()}
                    <div className="flex flex-wrap gap-2">
                        <p className="flex-0 max-sm:w-full max-sm:text-center">
                            Fake load (mspt)
                        </p>
                        <input
                            type="range"
                            onChange={(e) => setMspt(e.target.value)}
                            min={50} //20 ticks per sec
                            max={10000} //10 sec per tick
                            value={mspt}
                            className="range fill-darken-500 sm:flex-1"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <p className="flex-0 max-sm:w-full max-sm:text-center">
                            Simulation speed (mspt)
                        </p>
                        <input
                            type="range"
                            onChange={(e) => setMspt(e.target.value)}
                            min={50} //20 ticks per sec
                            max={10000} //10 sec per tick
                            value={mspt}
                            className="range fill-darken-500 sm:flex-1"
                        />
                    </div>
                </div>
            </div>
        );
    }

    function createCookieWidget() {
        const [birthDate, setBirthdate] = useState(new Date());
        const [time, setTime] = useState(new Date());

        // Todo: Move constants to a constants.js file
        const [cookies, setCookies] = useState(0);
        const [ticks, setTicks] = useState(0); //start at 0 ticks.
        const [mspt, setMspt] = useState(33); // how many milliseconds per tick
        const [timestep, setTimestep] = useState(1); // how many ticks to advance per tick.
        const [timescale, setTimescale] = useState(1); // how fast (1x, 2x, 100x, should the simulation run? This will trickle down to mspt.)

        const initialGrandmaCost = 2;
        const [grandmaCost, setGrandmaCost] = useState(initialGrandmaCost);
        const [grandmas, setGrandmas] = useState(0);

        // Game loop logic is here
        useEffect(() => {
            const interval = setInterval(() => {
                var newTime = new Date();
                var newTicks = ticks + timestep;

                setTicks(newTicks);

                // console.log(
                //     `Tick! (${ticks}) (${mspt}ms) (${newTime.toLocaleTimeString()})`,
                // );
            }, mspt / timescale);

            return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
        }, [ticks]);

        // Do every tick
        useEffect(() => {
            setTime(new Date());
            setCookies(cookies + grandmas);
        }, [ticks]);

        // Update timescale
        useEffect(() => {
            console.log(
                `Changing timescale to ${timescale}. Old mspt = ${mspt}`,
            );
        }, [timescale]);

        // Helper functions
        function getVagueTimeDelta(date) {
            return vagueTime.get({
                to: date,
            });
        }

        function howManyICanAffordPerUnitCost(unitPrice) {
            const n = Math.floor(cookies / unitPrice);
            return n;
        }

        function calculateTotal(unitPrice, n) {
            const total = unitPrice * n;
            return total;
        }

        // Render functions
        function renderCookie(count) {
            return (
                <div
                    className={`${cookies % 2 ? "shadow-inner-xl" : "shadow-inner-2xl"} flex-1 rounded-full bg-orange-900 transition-all sm:aspect-square`}
                >
                    <div className="flex h-full justify-center">
                        <div className="flex flex-col justify-center">
                            <p className="sm:text-fit font-header text-lighten-800">
                                {count && count}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        function renderTransactionReceipt(items) {
            return (
                <div>
                    <p>This is a transaction receipt.</p>
                </div>
            );
        }

        function renderAbsoluteToast({
            x = 100,
            y = 100,
            siz = 100,
            body = "Toast",
            lifespan = 5000,
        }) {
            // Declare the absolute position (x,y coordinates), size(tailwind scale), and lifespan (ms) for the toast
            return (
                <div
                    id="toast"
                    className={`t-y absolute animate-message-pop-in left-${x} rounded-full bg-red-700 text-lighten-800`}
                ></div>
            );
        }

        function RenderShop(props) {
            function RenderShopButton({ quantity, body, onClick }) {
                return (
                    <button
                        onClick={onClick}
                        className="active:scale:100 flex-1 rounded-lg bg-lighten-700 p-2 text-darken-600 transition-all hover:scale-105"
                    >
                        {quantity}
                        {body}
                    </button>
                );
            }

            function RenderGrandmas() {
                return (
                    <div className="flex flex-col gap-2">
                        <p className="">Grandmas: {grandmas}</p>
                        <div className="flex gap-2 max-sm:flex-col ">
                            <RenderShopButton
                                body={`Buy 1 $${grandmaCost}`}
                                onClick={() => buyGrandmas(1)}
                            />
                            <RenderShopButton
                                body={`Buy 5 $${grandmaCost * 5}`}
                                onClick={() => buyGrandmas(5)}
                            />
                            {/* This is a gnarly line of code lol */}
                            <RenderShopButton
                                body={`Buy Max (${howManyICanAffordPerUnitCost(grandmaCost) == 0 ? "None" : howManyICanAffordPerUnitCost(grandmaCost)}) $${grandmaCost * howManyICanAffordPerUnitCost(grandmaCost)}`}
                                onClick={() => buyGrandmas(-1)}
                            />
                        </div>
                    </div>
                );
            }

            function buyGrandmas(n) {
                var cost = n * grandmaCost;
                // if n is -1, the function will buy the maximum number of grandmas.
                if (n == -1) {
                    n = howManyICanAffordPerUnitCost(grandmaCost);
                    console.log(`Buying max grandmas (${n})`);
                    cost = n * grandmaCost;
                }

                if (cost > cookies) {
                    console.log("Not enough cookies to purchase grandma(s).");
                    renderAbsoluteToast();
                } else {
                    // Complete the transaction
                    setGrandmas(grandmas + n);
                    setCookies(cookies - cost);
                    setGrandmaCost(grandmaCost + 1);
                    renderTransactionReceipt();
                }
            }

            return (
                <div
                    id="shop"
                    className="flex flex-col gap-2 rounded-xl bg-darken-200 p-2 font-header text-sm text-lighten-700"
                >
                    <h1 className="text-left underline">Shop</h1>
                    <RenderGrandmas />
                </div>
            );
        }

        function RenderStatistics(props) {
            function RenderStatistic(props) {
                return <div></div>;
            }
            return (
                <div
                    id="statistics"
                    className="flex flex-col gap-2 rounded-xl bg-darken-200 p-2 font-header text-sm text-lighten-700"
                >
                    <h1 className="text-left underline">Statistics</h1>
                    <p className="">
                        birthDate: {birthDate.toLocaleTimeString()} (
                        {getVagueTimeDelta(birthDate)})
                    </p>
                    <p className="">currentDate: {time.toLocaleTimeString()}</p>
                    <p className="">timescale: {timescale}x</p>
                    <p className="">ticks passed: {ticks}</p>
                    <p className="">
                        tick rate: {Math.floor((1 / (mspt / 1000)) * timescale)}{" "}
                        per second, {Math.floor(mspt / timescale)}ms per tick.
                    </p>
                </div>
            );
        }

        function renderSimulationControls() {
            return (
                <div
                    id="simulationControls"
                    className="flex flex-col gap-2 rounded-xl bg-darken-200 p-2 font-header text-sm text-lighten-700"
                >
                    <p className="text-left underline">Controls</p>
                    <div className="flex flex-wrap gap-2">
                        <p className="flex-0">⏱️ Speed</p>
                        <div className="sm:flex-1">
                            <input
                                type="range"
                                min={0.5}
                                max={2}
                                value={timescale}
                                className="range stroke-lighten-400 transition-all"
                                onChange={(e) =>
                                    setTimescale(Number(e.target.value))
                                }
                                step={0.5}
                            />
                            <div className="flex w-full justify-between px-2 text-xs">
                                <span className="font-header font-bold text-darken-800">
                                    0.5x
                                </span>
                                <span className="font-header font-bold text-darken-800">
                                    1x
                                </span>
                                <span className="font-header font-bold text-darken-800">
                                    1.5x
                                </span>
                                <span className="font-header font-bold text-darken-800">
                                    2x
                                </span>
                            </div>
                        </div>
                    </div>
                    {props.data.experimental && (
                        <div className="flex flex-col gap-2 rounded-2xl bg-red-500 p-4 text-left">
                            <p className="font-pixel">
                                - Experimental features -
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <p className="flex-0 sm:text-left">
                                    Simulation speed ({mspt}mspt)
                                </p>
                                <input
                                    type="range"
                                    onChange={(e) => setMspt(e.target.value)}
                                    min={1} //1ms per tick
                                    max={10000} //10 sec per tick
                                    value={mspt}
                                    className="range fill-darken-500 sm:flex-1"
                                />
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div className=" flex flex-col gap-2 rounded-3xl border-2 border-orange-300 bg-yellow-300 p-6 text-xl text-yellow-900">
                <h1 className="font-headerScript text-5xl text-yellow-800">
                    Cookie Cloner
                </h1>
                <div className="flex justify-between gap-2 max-sm:flex-col sm:w-full">
                    {renderCookie(cookies)}
                    <button
                        className="min-h-36 min-w-36 rounded-xl bg-yellow-500 p-6 font-header text-6xl transition-all hover:scale-105 hover:bg-yellow-600 hover:shadow-lg active:scale-95 active:bg-yellow-800 active:blur"
                        onClick={() => setCookies(cookies + 1)}
                    >
                        +
                    </button>
                </div>
                <RenderShop />
                <RenderStatistics />
                {renderSimulationControls()}
            </div>
        );
    }

    function createCounterWidget() {
        const [count, setCount] = useState(0);

        return (
            <div className=" flex flex-col overflow-clip rounded-3xl bg-pink-600 p-6 text-xl text-lighten-800">
                <div
                    id="main-container"
                    className="flex h-full flex-col justify-center"
                >
                    <h1 className="font-headerScript text-5xl text-pink-100">
                        Counter
                    </h1>
                    <h1 className="font-headerScript text-9xl text-pink-100">
                        {count}
                    </h1>
                    <div className="flex justify-center gap-2 max-sm:flex-col">
                        <button
                            className="min-h-36 min-w-36 rounded-xl bg-pink-500 p-6 font-header text-6xl transition-all hover:scale-105 hover:bg-pink-300 active:scale-95 active:bg-pink-800 active:blur sm:hidden"
                            onClick={() => setCount(count + 1)}
                        >
                            +
                        </button>
                        <button
                            className="min-h-36 min-w-36 rounded-xl bg-pink-500 p-6 font-header text-7xl transition-all hover:scale-105 hover:bg-pink-300 active:scale-95 active:bg-pink-800 active:blur"
                            onClick={() => setCount(count - 1)}
                        >
                            -
                        </button>
                        <button
                            className="min-h-36 min-w-36 rounded-xl bg-pink-500 p-6 font-header text-6xl transition-all hover:scale-105 hover:bg-pink-300 active:scale-95 active:bg-pink-100 active:blur max-sm:hidden"
                            onClick={() => setCount(count + 1)}
                        >
                            +
                        </button>
                    </div>
                    <div className="-m-6 mt-4 bg-darken-200">
                        <div className="flex flex-nowrap justify-between gap-2 px-4 py-2">
                            <div>
                                <button
                                    onClick={() => setCount(0)}
                                    className=" font-header text-lighten-800 transition-all hover:text-lighten-400 active:text-lighten-900"
                                >
                                    Reset
                                </button>
                            </div>
                            <div className="flex flex-nowrap gap-4">
                                <button className="font-header text-lighten-800 transition-all hover:text-lighten-400 active:text-lighten-900">
                                    📂 Load
                                </button>
                                <button className="font-header text-lighten-800 transition-all hover:text-lighten-400 active:text-lighten-900">
                                    💾 Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Frame
                data={props.data}
                noScroll
            >
                {/* Container */}
                <div className="mx-auto my-4 flex max-w-[600px] flex-col justify-center gap-4 drop-shadow-lg max-sm:p-2">
                    <div className="flex flex-col gap-2 rounded-2xl bg-lighten-800 p-4">
                        <h1 className="w-full text-left font-header text-3xl font-light text-darken-800">
                            Widgets
                        </h1>
                        <p className="text-justify font-header text-darken-600">
                            ℹ️ These "widgets" demonstrate the 2024 Trifecta
                            standard. Some widgets will be games, some will
                            foster peer-to-peer experiences, and some will
                            feature peripheral support. All user data is
                            ephemeral unless otherwise stated. However, with
                            your permission, some widget content may be stored
                            as cookies. Like the rest of the site,{" "}
                            <span className="italic">
                                everything here is a work in progress
                            </span>
                            .
                        </p>
                        <Checkbox
                            className="font-lighten font-header text-darken-600"
                            body="Allow cookies: "
                            checked={false}
                            onChange={(e) => console.log(e)}
                        />
                        <Link
                            to="/contact"
                            className="font-header text-darken-600 underline"
                        >
                            Contact me directly for more information
                        </Link>
                    </div>
                    {/* Voltage Widget */}
                    {/* {createVoltageWidget()} */}
                    {/* Cookie Widget */}
                    {createCookieWidget()}
                    {/* Counter Widget */}
                    {createCounterWidget()}
                </div>
            </Frame>
        </>
    );
}
