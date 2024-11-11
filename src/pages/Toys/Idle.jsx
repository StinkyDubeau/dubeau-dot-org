import Frame from "../../components/Frame";
import { useState, useEffect } from "react";
import vagueTime from "vague-time";

export default function Idle(props) {
    const [capacity, setCapacity] = useState(100); // In watts
    const [load, setLoad] = useState(0); // In watts
    const [stored, setStored] = useState(100); // In joules

    const [birthDate, setBirthdate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [ticks, setTicks] = useState(0); //start at 0 ticks.
    const [mspt, setMspt] = useState(1000); // how many milliseconds per tick
    const [timestep, setTimestep] = useState(1); // how many ticks to advance per tick.
    const [timescale, setTimescale] = useState(1); // how fast (1x, 2x, 100x, should the simulation run? This will trickle down to mspt.)

    // Game loop logic is here
    useEffect(() => {
        const interval = setInterval(() => {
            var newTicks = ticks + timestep;

            if (load > capacity) {
                setStored(stored - load); // If capacity is insufficient, subtract the load from the stored power
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

    function Header() {
        return <div className="w-full bg-lighten-800">Header</div>;
    }

    function Footer() {
        return (
            <div className="flex w-full justify-around gap-2 bg-lighten-800 text-darken-800 max-sm:flex-col sm:gap-6">
                <p>Capacity: {capacity}</p>
                <p>Load: {load}</p>
                <p>Stored energy: {stored}</p>
                <p>Capacity: {capacity}</p>
                <p>Time: {time.toLocaleTimeString()}</p>
                <p>Spawn time: {birthDate.toLocaleTimeString()}</p>
                <p>Born: {getVagueTimeSince(birthDate)}</p>
            </div>
        );
    }

    return (
        <Frame
            data={props.data}
            noScroll
        >
            <Header />
            <div className="flex w-screen flex-col gap-2 bg-orange-400 p-2 font-header text-darken-700 sm:bg-green-500 sm:p-4">
                <h1 className="text-3xl">Idle Clicker</h1>
                <p>Capacity: {capacity} watts</p>
                <Button
                    body="Turn manual dynamo"
                    onClick={() => setCapacity(capacity + 1)}
                />
                <ManualDynamo />
            </div>
            <Footer />
        </Frame>
    );
}
