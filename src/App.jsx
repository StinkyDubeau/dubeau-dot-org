// Components
import { Routes, Route } from "react-router-dom";
import Frame from "./components/Frame";

// Functions
import { useState, useEffect } from "react";
import { MotionGlobalConfig, useReducedMotion } from "framer-motion";

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
import Countries from "./pages/Countries";

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
import { pre } from "framer-motion/client";

function App() {
    const [data, setData] = useState(Data);
    const prefersReducedMotion = useReducedMotion();

    // Apply accessbility settings when they are changed
    useEffect(() => {
        MotionGlobalConfig.skipAnimations = data.accessibility.reduceMotion;
    }, [data.accessibility]);

    useEffect(() => {
        // Apply accessbility settings inherited from browser
        setData((data) => ({
            ...data,
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
            <Frame
                data={data}
                setData={setData}
            >
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
