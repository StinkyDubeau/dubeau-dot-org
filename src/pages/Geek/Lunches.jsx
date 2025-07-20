import React, { useState, useContext, useEffect, useRef } from "react";
import geekData from "./GeekData";
import LunchForm from "./LunchForm";
import { JSONTree } from "react-json-tree";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const RealmAppContext = React.createContext(null);

export default function Lunches(props) {
    const [canSubmit, setCanSubmit] = useState(false);
    const [usernameCookie, setUsernameCookie] = useState(null);
    const [agent, setAgent] = useState(null);
    const [username, setUsername] = useState(undefined);
    const [loggedIn, setLoggedIn] = useState(false);
    const [showingPreview, setShowingPreview] = useState(false);
    const [showingSubmission, setShowingSubmission] = useState(true);

    const previewTheme = {
        scheme: "monokai",
        author: "wimer hazenberg (http://www.monokai.nl)",
        base00: "#272822",
        base01: "#383830",
        base02: "#49483e",
        base03: "#75715e",
        base04: "#a59f85",
        base05: "#f8f8f2",
        base06: "#f5f4f1",
        base07: "#f9f8f5",
        base08: "#f92672",
        base09: "#fd971f",
        base0A: "#f4bf75",
        base0B: "#a6e22e",
        base0C: "#a1efe4",
        base0D: "#66d9ef",
        base0E: "#ae81ff",
        base0F: "#cc6633",
    };

    const [submission, setSubmission] = useState({
        name: "",
        ntlogin: "",
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
    const data = geekData();
    console.log(data);

    // Apply vignette frame property
    // Ensure page never has navbar
    useEffect(() => {
        props.setData({
            ...props.data,
            noNavbar: true,
            vignette: true,
        });
    }, []);

    async function autoFill() {
        data.forEach((store) => {
            store.agents.forEach((agent) => {
                console.log(agent.name);
                if (agent.username === username) {
                    console.log("Found match!");
                    setAgent(agent);
                    setSubmission({ ...submission, days: agent.days });
                }
            });
        });
    }

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
                    setSubmission({
                        ...submission,
                        ntlogin: result,
                        name: agent.name,
                    });
                    return result;
                })
                .catch((error) => {
                    console.log(error);
                    return null;
                });

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

    function handleSubmissionButton() {
        console.log("Set showingSubmission to ", !showingSubmission);
        setShowingSubmission(true);
        setShowingPreview(false);
    }

    function handlePreviewButton() {
        console.log("Set showingPreview to ", !showingPreview);
        setShowingPreview(true);
        setShowingSubmission(false);
    }

    function createDayEntry(day, index) {
        const dayName = Object.keys(day).toString();
        const isToday = day === submission.days[new Date().getDay()];
        const submissionDay = submission.days[index][dayName];
        return (
            <div
                key={`${index}${dayName}`}
                className="flex justify-center gap-2 p-1 max-md:flex-col"
            >
                {/* DayName */}
                <p className="flex-0 w-full text-left font-bold text-darken-800">
                    {dayName}{" "}
                    <span className="font-normal">{isToday && "(today)"}</span>
                </p>
                {/* Punches */}
                <div className="flex gap-2">
                    {/* Punch out */}
                    <p className="my-auto text-xs text-darken-800">out</p>
                    <input
                        className="w-full min-w-24 flex-1 rounded border-none bg-darken-50 shadow-inner"
                        onChange={(e) => {
                            console.log(e.target.value);
                        }}
                        // type="time"
                        value={submissionDay.out}
                    />
                    {/* Punch in */}
                    <p className="my-auto text-xs text-darken-800">in</p>
                    <input
                        className="w-full min-w-24 flex-1 rounded border-none bg-darken-50 shadow-inner"
                        onChange={(e) => {
                            console.log(e.target.value);
                        }}
                        // type="time"
                        value={submissionDay.in}
                    />
                </div>
                {/* Notes */}
                <input
                    className="flex-0 w-full rounded border-none bg-darken-50 text-darken-800 shadow-inner"
                    placeholder="Notes"
                    value={submissionDay.note}
                />
            </div>
        );
    }

    function createPreviewPage(submission) {
        return (
            <motion.div className="flex flex-col justify-center gap-2 p-1 text-left max-md:flex-col">
                <p className="p-2 pl-2 text-left font-header text-xl font-bold text-darken-800">
                    Preview Page
                </p>
                <div className="rounded-2xl bg-lighten-800 font-header">
                    <JSONTree
                        data={submission}
                        className="bg-none text-left"
                        theme={previewTheme}
                        invertTheme={true}
                    />
                </div>
            </motion.div>
        );
    }
    setAgent;
    function createSubmissionPage() {
        return (
            <motion.div className="flex flex-col justify-center gap-2 p-1 text-left max-md:flex-col">
                <p className="p-2 pl-2 text-left font-header text-xl font-bold text-darken-800">
                    Submission Page
                </p>
                <div className="rounded-2xl bg-lighten-900 p-2">
                    {submission.days.map(createDayEntry)}
                </div>
            </motion.div>
        );
    }

    function createEntryPage() {
        return (
            <div>
                {/* Gradient bg */}
                <div className="flex animate-gradient-x flex-col justify-center gap-4 rounded-3xl bg-gradient-to-tl from-orange-600 via-orange-500 to-yellow-500 p-4 drop-shadow-xl">
                    <p className="text-3xl font-bold text-zinc-800">
                        {submission.date.toDateString()}
                    </p>
                    <div className="z-10 -mb-2 flex gap-2 rounded-t-2xl bg-lighten-900 p-4 px-4">
                        <button
                            className={`${showingSubmission ? "underline shadow-none" : "bg-lighten-800 hover:bg-darken-100"} h-12 w-full flex-1 rounded-full border border-darken-50 font-header font-bold text-darken-700 shadow-lg transition-all `}
                            onClick={handleSubmissionButton}
                        >
                            Submission Page
                        </button>
                        <button
                            className={`${showingPreview ? "underline shadow-none" : "bg-lighten-800 hover:bg-darken-100"} h-12 w-full flex-1 rounded-full border border-darken-50 font-header font-bold text-darken-700 shadow-lg transition-all `}
                            onClick={handlePreviewButton}
                        >
                            Preview Page
                        </button>
                    </div>

                    <div className="-mt-2 rounded-b-2xl bg-lighten-900 p-4 px-4">
                        <AnimatePresence>
                            {showingPreview
                                ? createPreviewPage(submission)
                                : createSubmissionPage(submission)}
                        </AnimatePresence>
                    </div>
                    <div className="flex justify-stretch gap-2 rounded-2xl bg-lighten-900 p-4">
                        <button
                            onClick={autoFill}
                            className="h-12 flex-1 rounded-full bg-darken-50 font-bold text-darken-700 shadow-lg transition-all hover:bg-darken-100"
                        >
                            Autofill
                        </button>
                        <LunchForm
                            data={props.data}
                            setData={props.setData}
                            lunches={submission}
                        />
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
                            Your account will stay logged in for up to 60 days.
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

    function createLogoutButton() {
        return (
            <button
                onClick={logOut}
                // Hide button if there's no username
                className="text-nowrap rounded-2xl bg-lighten-900 p-4 font-bold text-darken-700 shadow-xl transition-all hover:scale-105"
            >
                Log out
            </button>
        );
    }

    function createNavigation() {
        return (
            <div className="fixed left-0 top-0 z-50 max-h-16 w-screen min-w-36 bg-center">
                <div className="flex justify-around gap-2 bg-lighten-400 shadow-xl backdrop-blur-xl max-sm:rounded-b-xl sm:rounded-xl">
                    <div
                        id="logo"
                        className="h-stretch flex flex-col justify-center"
                    >
                        <img
                            className="max-h-8"
                            src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc645e37ea0b1a348/6183051594e50d5a63800f45/gs-logo.png"
                            alt="Geek Squad Logo"
                        />
                    </div>
                    <div
                        id="header"
                        className="m-5"
                    >
                        <p className="text-3xl font-bold text-darken-800 sm:text-left">
                            Lunch Edit for {agent ? agent.name : username}
                        </p>
                    </div>
                    {createLogoutButton()}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="mt-24 min-h-screen w-screen">
                {loggedIn ? createEntryPage() : createLoginPage()}
            </div>
            {loggedIn && createNavigation()}
        </>
    );
}
