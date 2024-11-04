import { useEffect, useState } from "react";
import Frame from "../../components/Frame";
import { Link } from "react-router-dom";
import vagueTime from "vague-time";

export default function (props) {
    // returns 'in a minute'
    console.log(
        vagueTime.get({
            to: Date.now() + 60000,
        }),
    );

    // Widgits are:
    // - Rich: Strong design that's engagingly animated
    // - Connected: Backed by a secure connection to others
    // - Responsive: From centimeters to fullscreen, they scale

    function createCookieWidget() {
        const [birthDate, setBirthdate] = useState(new Date());
        const [cookies, setCookies] = useState(0);

        const initialGrandmaCost = 10;

        useEffect(() => {
            console.log("use effect mounted");
        }, [1000]);

        function getVagueTimeDelta(date) {
            return vagueTime.get({
                to: date,
            });
        }

        function renderCookie(count, diameter) {
            return (
                <div
                    className={`h-${diameter} w-${diameter} rounded-full bg-orange-900 shadow-xl`}
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

        // Helper functions
        function howManyICanAffordPerUnitCost(unitPrice) {
            const n = Math.floor(cookies / unitPrice);
            return n;
        }

        function calculateTotal(unitPrice, n) {
            const total = unitPrice * n;
            return total;
        }

        // Render functions
        function renderTransactionReceipt(items) {
            return (
                <div>
                    <p>This is a transaction receipt.</p>
                </div>
            );
        }

        function renderShop() {
            const [grandmaCost, setGrandmaCost] = useState(initialGrandmaCost);
            const [grandmas, setGrandmas] = useState(0);

            function buyGrandmas(n) {
                const cost = n * grandmaCost;
                if (cost > cookies) {
                    console.log("Not enough cookies to purchase grandma(s).");
                } else {
                    // Complete the transaction
                    setGrandmas(grandmas + n);
                    setCookies(cookies - cost);
                    renderTransactionReceipt();
                }
            }

            return (
                <div
                    id="statistics"
                    className="flex flex-col gap-2 rounded-xl bg-darken-200 p-2 font-header text-sm text-lighten-700"
                >
                    <h1 className="text-left underline">Shop</h1>
                    <p className="">grandmas: {grandmas}</p>
                    <button onClick={() => buyGrandmas(1)}>
                        Buy 1 ${grandmaCost}
                    </button>
                    <button onClick={() => buyGrandmas(10)}>
                        Buy 10 ${grandmaCost * 10}
                    </button>
                    <button
                        onClick={() =>
                            buyGrandmas(
                                howManyICanAffordPerUnitCost(grandmaCost),
                            )
                        }
                    >
                        Buy Max ({howManyICanAffordPerUnitCost(grandmaCost)})
                    </button>
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
                        birthDate: {birthDate.toLocaleTimeString()}
                    </p>
                    <p className="">
                        currentDate: {new Date().toLocaleTimeString()}
                    </p>
                    <p className="">
                        You have been playing since{" "}
                        {getVagueTimeDelta(birthDate)}
                    </p>
                </div>
            );
        }

        return (
            <div className=" flex flex-col gap-2 rounded-3xl bg-yellow-300 p-6 text-xl text-yellow-900">
                <h1 className="font-headerScript text-5xl text-yellow-800">
                    Cookie cloner
                </h1>
                <div className="flex justify-center gap-2 max-sm:flex-col">
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
            <Frame data={props.data}>
                {/* Container */}
                <div className="my-auto mt-8 flex h-screen flex-col justify-center gap-2 drop-shadow-lg">
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
