import Frame from "../components/Frame";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Panel from "../components/Panel";

import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function Accessibility(props) {
    const [data, setData] = useState(props.data);
    const reduceMotion = props.data.accessibility?.reduceMotion;
    const reduceMotionEnabled =
        typeof reduceMotion === "boolean"
            ? reduceMotion
            : Boolean(reduceMotion?.enabled);
    const colorMode = props.data.colorMode === "light" ? "light" : "dark";

    // Apply vignette frame property
    // Ensure page never has navbar
    useEffect(() => {
        props.setData({
            ...props.data,
            vignette: true,
            noNavbar: false,
        });
    }, []);

    data &&
        Object.values(data).map((key, index) => {
            console.log(key);
        });

    function ReduceMotion() {
        return (
            <>
                {/* Reduce Motion */}
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={reduceMotionEnabled}
                        onChange={(e) => {
                            props.setData({
                                ...props.data,
                                accessibility: {
                                    ...props.data.accessibility,
                                    reduceMotion: e.target.checked,
                                },
                            });
                        }}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    Reduce Motion*
                </label>
                <p className="text-sm">
                    Disables page transitions and many component animations.
                </p>
                <hr />
            </>
        );
    }

    function ColorMode() {
        return (
            <>
                <div className="flex flex-col gap-2">
                    <p>Color Mode</p>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className={`lit-control rounded-xl px-3 py-2 ${
                                colorMode === "dark"
                                    ? "text-darken-900"
                                    : "text-darken-500"
                            }`}
                            onClick={() => {
                                props.setData({
                                    ...props.data,
                                    colorMode: "dark",
                                });
                            }}
                        >
                            Dark
                        </button>
                        <button
                            type="button"
                            className={`lit-control rounded-xl px-3 py-2 ${
                                colorMode === "light"
                                    ? "text-darken-900"
                                    : "text-darken-500"
                            }`}
                            onClick={() => {
                                props.setData({
                                    ...props.data,
                                    colorMode: "light",
                                });
                            }}
                        >
                            Light
                        </button>
                    </div>
                </div>
                <p className="text-sm">
                    Saves your preferred light or dark site theme.
                </p>
                <hr />
            </>
        );
    }

    function DisableAll() {
        return (
            <>
                {/* Disable All Accessibility Settings */}
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={!props.data.accessibility || false}
                        onChange={(e) => {
                            props.setData({
                                ...props.data,
                                accessibility: !e.target.checked,
                            });
                        }}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    Disable All
                </label>
                <p className="text-sm">
                    Turns off all accessibility settings. This may fix problems
                    with experimental features.
                </p>
                <hr />
            </>
        );
    }

    return (
        <div className="mt-4 flex w-full flex-col justify-center gap-4 pb-32">
            <div className="lit-panel mx-4 flex max-w-96 flex-col gap-2 rounded-2xl p-4 text-left font-header text-darken-800">
                <h1 className="text-left text-3xl font-light">
                    Accessibility Settings
                </h1>
                {/* Accessibility Toggles */}
                <div className="flex flex-col gap-2">
                    <ColorMode />
                    <ReduceMotion />
                    <DisableAll />
                    <p>*Your device may be controlling this setting.</p>
                </div>
            </div>
            <div className="lit-panel mx-4 flex max-w-96 flex-col gap-2 rounded-2xl p-4 text-left font-header text-darken-800">
                <h1 className="text-left text-3xl font-light">Report issues</h1>

                <p>
                    Improve the site for yourself and others; please suggest
                    more accessibility features:
                </p>
                <div className="m-auto">
                    <ContactForm
                        data={props.data}
                        setData={props.setData}
                    />
                </div>
            </div>
        </div>
    );
}
