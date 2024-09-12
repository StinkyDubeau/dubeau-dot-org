// Components
import { Routes, Route } from "react-router-dom";

// Functions
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Fun from "./pages/Fun";
import Contact from "./pages/Contact";
import Geek from "./pages/Geek/Lunches";
import Chat from "./pages/Web3/Login";
import Astros from "./pages/Astros";
import Trackers from "./pages/Trackers";

// Pages: Game Servers
import Vanilla from "./pages/Servers/Vanilla";
import BetterThanWolves from "./pages/Servers/BetterThanWolves";
import Factorio from "./pages/Servers/Factorio";
import KSP from "./pages/Servers/KSP";

// Pages: Fun
import Counter from "./pages/Toys/Counter";

// Assets
import Data from "./assets/Data";


function App() {
    const [data, setData] = useState(Data);

    return (
        <>
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
                <>
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
                        path="/servers/ksp"
                        element={
                            <KSP
                                data={data}
                                setData={setData}
                            />
                        }
                    />
                    <Route
                        path="/fun/counter"
                        element={
                            <Counter
                                data={data}
                                setData={setData}
                            />
                        }
                    />
                </>
            </Routes>
        </>
    );
}

export default App;
