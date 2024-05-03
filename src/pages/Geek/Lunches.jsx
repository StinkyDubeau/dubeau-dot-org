import Frame from "../../components/Frame";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect, useRef } from "react";

const RealmAppContext = React.createContext(null);

export default function Lunches(props) {
    const [canSubmit, setCanSubmit] = useState(false);
    const [usernameCookie, setUsernameCookie] = useState(null);
    const [username, setUsername] = useState(undefined);
    const [loggedIn, setLoggedIn] = useState(false);

    const [submission, setSubmission] = useState({
        date: new Date(),
        days: [
            { sunday: { in: "", out: "", note: "" } },
            { monday: { in: "", out: "", note: "" } },
            { tuesday: { in: "", out: "", note: "" } },
            { wednesday: { in: "", out: "", note: "" } },
            { thursday: { in: "", out: "", note: "" } },
            { friday: { in: "", out: "", note: "" } },
            { saturday: { in: "", out: "", note: "" } },
        ],
    });

    // Used to check if first render
    const didMount = useRef(false);

    // Login if user has a username cookie
    useEffect(() => {
        // Run only on first render:
        if (!didMount.current) {
            const n = console.log("Trying to log in from cookies.");
            getCookie("username")
                .then((result) => {
                    console.log("Got cookie!");
                    console.log(result);
                    setUsernameCookie(result);
                    return result;
                })
                .catch((error) => {
                    console.log(error);
                    return null;
                });

            console.log("did mount abort");
            didMount.current = true;
            return;
        }
        // Abort
        if (typeof usernameCookie !== "string") {
            const a = typeof usernameCookie;
            const b = typeof String;
            console.log(a, b);
            console.log("not string abort");
            console.log(typeof usernameCookie);
            return;
        }

        console.log("Username cookie effect");
        console.log(`Username cookie: ${usernameCookie}`);
        updateUsername(usernameCookie);
    }, [usernameCookie]);

    const setCookie = (name, value, days) => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);

        document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    };

    const getCookie = async (name) => {
        const cookies = document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${name}=`));

        return cookies ? cookies.split("=")[1] : null;
    };

    const deleteCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    };

    function logOut() {
        console.log("Logging out.");
        deleteCookie("username");
        setUsername(null);
        setUsernameCookie(null);
        setLoggedIn(false);
    }

    function updateUsername(name) {
        setUsername(name);

        // Set a username cookie that expires in 7 days
        try {
            console.log(`Logged in as ${name}`);
            setCookie("username", name, 60);
        } catch {
            console.log(
                "Could not save username. Check that cookies are enabled.",
            );
        }

        setLoggedIn(true);
    }

    function createDayEntry(day) {
        const dayName = Object.keys(day).toString();
        const isToday = day === submission.days[new Date().getDay()];
        return (
            <div className="flex gap-2">
                {isToday && (
                    <p className="my-auto font-header text-xl">{">"}</p>
                )}
                <div
                    className={`flex h-20 flex-col justify-center gap-2 rounded-lg p-2 ${isToday && "bg-darken-50 shadow"}`}
                >
                    <div className="flex w-full gap-2">
                        <p className="flex-0 w-full text-left text-darken-800">
                            {dayName}
                        </p>
                        <input
                            className="w-full rounded text-darken-800"
                            placeholder="Notes"
                        />
                    </div>
                    <div className="flex gap-2">
                        {/* Punch out */}
                        <p className="my-auto text-xs text-darken-800">out</p>
                        <input
                            className="w-full flex-1 rounded bg-lighten-800"
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                            type="time"
                        />{" "}
                        {/* Punch in */}
                        <p className="my-auto text-xs text-darken-800">in</p>
                        <input
                            className="w-full min-w-24 flex-1 rounded bg-lighten-800"
                            onChange={(e) => {
                                console.log(e.target.value);
                            }}
                            type="time"
                        />
                    </div>
                </div>
                {isToday && (
                    <p className="my-auto font-header text-xl">{"<"}</p>
                )}
            </div>
        );
    }

    function createEntryPage() {
        return (
            <div>
                {/* Gradient bg */}
                <div className="m-5 flex animate-gradient-x justify-center rounded-3xl bg-gradient-to-tl from-orange-600 via-orange-500 to-yellow-500 p-4 sm:gap-8">
                    <div className="flex flex-wrap justify-around gap-2 lg:gap-48">
                        <div className="flex flex-col gap-4">
                            <p className="text-3xl font-bold text-zinc-800">
                                {submission.date.toDateString()}
                            </p>
                            {/* <div className="flex justify-center gap-2">
                                <button className="h-16 w-full rounded-2xl bg-lighten-900 text-lg text-darken-800 shadow-lg transition-all hover:bg-lighten-900">
                                    Choose Store
                                </button>
                                <button className="h-16 w-full rounded-2xl bg-lighten-900 text-lg text-darken-800 shadow-lg transition-all hover:bg-lighten-900">
                                    Choose Van
                                </button>
                            </div> */}
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="w-72 rounded-2xl bg-lighten-900 p-4 shadow-xl">
                                {submission.days.map(createDayEntry)}
                            </div>

                            <button className="w-72 rounded-2xl bg-lighten-900 p-4 font-bold text-darken-700 shadow-xl transition-all hover:scale-105">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function createLoginPage() {
        return (
            <div>
                <div className="m-5 flex animate-gradient-x justify-center rounded-3xl bg-gradient-to-tl from-orange-600 via-orange-500 to-yellow-500 p-4 sm:gap-8">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            updateUsername(username);
                        }}
                    >
                        <div className="mx-auto flex w-72 flex-col gap-2 rounded-2xl bg-lighten-800 p-4 shadow-xl">
                            <input
                                className="h-12 rounded-full bg-darken-50 p-2 text-darken-800 shadow-inner"
                                value={username}
                                placeholder="NT login (i.e. 'jadubeau')"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <button
                                className="h-12 rounded-full bg-darken-50 font-bold text-darken-700 transition-all hover:bg-darken-100"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                        <p className="m-2 w-72 font-bold text-darken-600">
                            Your account will stay logged in for 60 days. Click
                            on your <span className="underline">username</span>{" "}
                            to log out.
                        </p>
                    </form>
                </div>
                <div className="m-5 flex animate-gradient-x justify-center rounded-3xl bg-gradient-to-tl from-orange-600 via-orange-500 to-yellow-500 p-4 sm:gap-8">
                    <div className="mx-auto flex w-72 flex-col gap-2 rounded-2xl bg-lighten-800 p-4 shadow-xl">
                        <button
                            className="h-12 rounded-full bg-darken-50 font-bold text-darken-700 transition-all hover:bg-darken-100"
                            type="submit"
                        >
                            Leader Access
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    function createLoginButton() {
        return (
            <button
                onClick={logOut}
                // Hide button if there's no username
                className={`h-full p-2 ${!username && "hidden"}`}
            >
                {username && username.toString()}
            </button>
        );
    }

    function createNavigation() {
        return (
            <div className="fixed bottom-0 left-0 z-50 h-16 w-screen min-w-36 bg-center sm:left-1.5 sm:top-1 sm:w-auto">
                <div className="bg-lighten-400 backdrop-blur-xl max-sm:rounded-t-xl sm:rounded-xl">
                    {createLoginButton()}
                </div>
            </div>
        );
    }

    return (
        <>
            <Frame
                data={props.data}
                noNavbar
                vignette
            >
                <div className="min-h-[150vh] w-screen">
                    {/* Logo */}
                    <div className="flex h-16 justify-center sm:h-32">
                        <img
                            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc645e37ea0b1a348/6183051594e50d5a63800f45/gs-logo.png"
                            alt="Geek Squad Logo"
                        />
                    </div>
                    <div className="m-5">
                        <p className="text-3xl font-bold text-lighten-800 sm:text-left">
                            Lunch Edit
                        </p>
                    </div>
                    {loggedIn ? createEntryPage() : createLoginPage()}
                </div>
            </Frame>
            {loggedIn && createNavigation()}
        </>
    );
}
