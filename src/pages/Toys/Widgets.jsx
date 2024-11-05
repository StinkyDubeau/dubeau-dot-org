import { useEffect, useState } from "react";
import Frame from "../../components/Frame";
import { Link } from "react-router-dom";
import vagueTime from "vague-time";

export default function (props) {
    // Widgets are:
    // - Rich: Strong design that's engagingly animated
    // - Connected: Backed by a secure connection to others
    // - Responsive: From centimeters to fullscreen, they scale

    function createCookieWidget() {
        const [birthDate, setBirthdate] = useState(new Date());
        const [time, setTime] = useState(new Date());

        // Todo: Move constants to a constants.js file
        const [cookies, setCookies] = useState(0);
        const [ticks, setTicks] = useState(0); //start at 0 ticks.
        const [mspt, setMspt] = useState(500); // how many milliseconds per tick
        const [timestep, setTimestep] = useState(1); // how many ticks to advance per tick.

        const initialGrandmaCost = 2;
        const [grandmaCost, setGrandmaCost] = useState(initialGrandmaCost);
        const [grandmas, setGrandmas] = useState(0);

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

        // Do every tick
        useEffect(() => {
            setTime(new Date());
            setCookies(cookies + grandmas);
        }, [ticks]);

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
        function renderCookie(count, diameter) {
            return (
                <div
                    className={`flex-0 w-full rounded-full bg-orange-900 shadow-xl`}
                >
                    <div className="flex h-full justify-center">
                        <div className="flex flex-col justify-center">
                            <p className="font-header text-lighten-800">
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

        function renderShop() {
            function RenderShopButton({ quantity, body, onClick }) {
                return (
                    <button
                        onClick={onClick}
                        className="rounded-lg bg-lighten-50 p-2 transition-all hover:bg-none active:bg-lighten-100"
                    >
                        {quantity}
                        {body}
                    </button>
                );
            }

            function RenderGrandmas() {
                return (
                    <div className="flex flex-col justify-center gap-2 rounded-lg bg-darken-200 p-2">
                        <p className="">grandmas: {grandmas}</p>
                        <RenderShopButton
                            quantity={1}
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
                            onClick={() =>
                                buyGrandmas(
                                    howManyICanAffordPerUnitCost(grandmaCost),
                                )
                            }
                        />
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

        function renderStatistics() {
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
                    <p className="">ticks passed: {ticks}</p>
                    <p className="">
                        tick rate: {1 / (mspt / 1000)} per second, {mspt}ms per
                        tick.
                    </p>
                </div>
            );
        }

        return (
            <div className=" flex flex-col gap-2 rounded-3xl bg-yellow-300 p-6 text-xl text-yellow-900">
                <h1 className="font-headerScript text-5xl text-yellow-800">
                    Cookie cloner
                </h1>
                <div className="flex justify-between gap-2 max-sm:flex-col sm:w-full">
                    {renderCookie(cookies, 52)}
                    <button
                        className="min-h-36 min-w-36 rounded-xl bg-yellow-500 p-6 font-header text-6xl transition-all hover:scale-105 hover:bg-yellow-600 hover:shadow-lg active:scale-95 active:bg-yellow-800 active:blur"
                        onClick={() => setCookies(cookies + 1)}
                    >
                        +
                    </button>
                </div>
                {renderShop()}
                {renderStatistics()}
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
        );
    }

    function createCounterWidget() {
        const [count, setCount] = useState(0);

        return (
            <div className=" flex flex-col rounded-3xl bg-pink-600 p-6 text-xl text-lighten-800">
                <div
                    id="main-container"
                    className="flex h-full flex-col justify-center"
                >
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
                <div className="my-4 flex flex-col justify-center gap-2 drop-shadow-lg">
                    {/* Cookie Widgit */}
                    {createCookieWidget()}
                    {/* Counter Widgit */}
                    {createCounterWidget()}
                    {/* Back to home */}
                    <div className="flex min-h-24 justify-center rounded-3xl bg-lighten-800">
                        <Link
                            to="/fun"
                            className="m-0 flex flex-col justify-center font-header text-xl text-darken-700"
                        >
                            Back to home
                        </Link>
                    </div>
                </div>
            </Frame>
        </>
    );
}
