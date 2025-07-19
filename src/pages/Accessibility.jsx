import Frame from "../components/Frame";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Panel from "../components/Panel";

import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

export default function Accessibility(props) {
    const [data, setData] = useState(props.data);

    // Apply page properties for <Frame />
    useEffect(() => {
        props.setData({
            ...props.data,
            vignette: true,
            noNavbar: false,
            scrollToTop: true,
            noScroll: false,
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
                        checked={props.data.accessibility.reduceMotion || false}
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
            <div className="mx-4 flex max-w-96 flex-col gap-2 rounded-2xl bg-lighten-900 p-4 text-left font-header text-darken-800">
                <h1 className="text-left text-3xl font-light">
                    Accessibility Settings
                </h1>
                {/* Accessibility Toggles */}
                <div className="flex flex-col gap-2">
                    <ReduceMotion />
                    <DisableAll />
                    <p>
                        * These settings can also be controlled by your device
                        preferences
                    </p>
                </div>
            </div>
            <div className="mx-4 flex max-w-96 flex-col gap-2 rounded-2xl bg-lighten-900 p-4 text-left font-header text-darken-800">
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

            <Link
                to="/"
                className="mx-4 flex max-w-96 flex-col gap-2 rounded-2xl bg-lighten-900 p-4 text-left font-header text-darken-800"
            >
                <h1 className="text-left text-3xl font-light underline">
                    Back to home
                </h1>
            </Link>
        </div>
    );
}
