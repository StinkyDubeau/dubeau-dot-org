// Components
import { Routes, Route } from "react-router-dom";
import Frame from "./components/Frame";
import MotionLighting from "./components/MotionLighting";
// Vercel Components
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
// Functions
import { useState, useEffect } from "react";
import { MotionGlobalConfig, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Fun from "./pages/Fun";
import Contact from "./pages/Contact";
import Geek from "./pages/Geek/Lunches";
import Chat from "./pages/Web3/Login";
import Astros from "./pages/Astros";
import Trackers from "./pages/Trackers";
import Accessibility from "./pages/Accessibility";
import Widgets from "./pages/Toys/Widgets";
import Countries from "./pages/Servers/Countries/Countries";

// Pages: Game Servers
import Vanilla from "./pages/Servers/Vanilla";
import Modded from "./pages/Servers/Modded";
import BetterThanWolves from "./pages/Servers/BetterThanWolves";
import Factorio from "./pages/Servers/Factorio";
import KSP from "./pages/Servers/KSP";
import Beam from "./pages/Servers/BeamMP";

// Assets
import Data from "./assets/Data";
import Tabs from "./pages/Toys/Tabs";
import Gallery from "./pages/Toys/Gallery";
import Dayplanner from "./pages/Toys/Dayplanner/Main";
import Idle from "./pages/Toys/Idle/Main";
import { AnimatePresence } from "framer-motion";

function shouldEnableVercelTelemetry() {
    if (typeof window === "undefined") {
        return false;
    }

    const { hostname } = window.location;

    if (
        hostname === "localhost" ||
        hostname === "127.0.0.1" ||
        hostname === "[::1]" ||
        hostname.endsWith(".loca.lt")
    ) {
        return false;
    }

    return !/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[0-1])\.)/.test(hostname);
}

function getReduceMotionEnabled(accessibility) {
    const reduceMotion = accessibility?.reduceMotion;

    if (typeof reduceMotion === "boolean") {
        return reduceMotion;
    }

    return Boolean(reduceMotion?.enabled);
}

function getSavedColorMode() {
    try {
        return window.localStorage.getItem("dubeau-color-mode");
    } catch {
        return null;
    }
}

function App() {
    const [data, setData] = useState(Data);
    const prefersReducedMotion = useReducedMotion();
    const showVercelTelemetry = shouldEnableVercelTelemetry();

    // Apply accessbility settings when they are changed
    useEffect(() => {
        MotionGlobalConfig.skipAnimations = getReduceMotionEnabled(
            data.accessibility,
        );
    }, [data.accessibility]);

    useEffect(() => {
        const savedColorMode = getSavedColorMode();

        // Apply accessbility settings inherited from browser
        setData((data) => ({
            ...data,
            colorMode: savedColorMode || data.colorMode,
            accessibility: {
                ...data.accessibility,
                reduceMotion: prefersReducedMotion,
            },
        }));

        // ` key | Toggle experimental features
        const handleKeyPress = (data) => {
            if (data.key === "`") {
                setData((data) => ({
                    ...data,
                    experimental: !data.experimental,
                }));

                console.log("Toggled experimental features");
                console.log(data.experimental);
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <>
            <MotionLighting
                reduceMotion={getReduceMotionEnabled(data.accessibility)}
                colorMode={data.colorMode}
            />
            <Frame
                data={data}
                setData={setData}
            >
                {showVercelTelemetry ? (
                    <>
                        <Analytics />
                        <SpeedInsights />
                    </>
                ) : null}

                <Helmet>
                    {/* This is the default site title when a younger component doesn't also have a <Helmet> */}
                    <meta charSet="utf-8" />
                    <title>
                        {data &&
                            `dubeau(${data.experimental ? "experimental" : "dot"})org`}
                    </title>
                    <link
                        rel="dubeau.org"
                        href="http://dubeau.org/"
                    />
                </Helmet>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/fun"
                            element={
                                <Fun
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/blog"
                            element={
                                <Blog
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Contact
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/geek"
                            element={
                                <Geek
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/chat"
                            element={
                                <Chat
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/trackers"
                            element={
                                <Trackers
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/astros"
                            element={
                                <Astros
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/servers/*"
                            element={
                                <Trackers
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/servers/vanilla"
                            element={
                                <Vanilla
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/servers/modded"
                            element={
                                <Modded
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/neobeau"
                            element={
                                <Modded
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/servers/btw"
                            element={
                                <BetterThanWolves
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/servers/factorio"
                            element={
                                <Factorio
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/servers/beam"
                            element={
                                <Beam
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/servers/ksp"
                            element={
                                <KSP
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/fun/widgets"
                            element={
                                <Widgets
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/fun/tabs"
                            element={
                                <Tabs
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/fun/gallery"
                            element={
                                <Gallery
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/dayplanner"
                            element={
                                <Dayplanner
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/idle"
                            element={
                                <Idle
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/countries"
                            element={
                                <Countries
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                        <Route
                            path="/accessibility"
                            element={
                                <Accessibility
                                    data={data}
                                    setData={setData}
                                />
                            }
                        />
                    </Routes>
                </AnimatePresence>
            </Frame>
        </>
    );
}

export default App;
