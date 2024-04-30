// Components
import { Routes, Route } from "react-router-dom";

// Functions
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Fun from "./pages/Fun";
import Contact from "./pages/Contact";
import Geek from "./pages/Geek/Lunches";
import Chat from "./pages/Web3/p2p";
import Trackers from "./pages/Trackers";

// Assets
import Data from "./assets/Data";

function App() {
    const [data, setData] = useState(Data);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home data={data} setData={setData} />}
                />
                <Route
                    path="/fun"
                    element={<Fun data={data} setData={setData} />}
                />
                <Route
                    path="/contact"
                    element={<Contact data={data} setData={setData} />}
                />
                <Route
                    path="/geek"
                    element={<Geek data={data} setData={setData} />}
                />
                <Route
                    path="/chat"
                    element={<Chat data={data} setData={setData} />}
                />
                <Route
                    path="/trackers"
                    element={<Trackers data={data} setData={setData} />}
                />
                <Route
                    path="/servers/*"
                    element={<Trackers data={data} setData={setData} />}
                />
            </Routes>
        </>
    );
}

export default App;
