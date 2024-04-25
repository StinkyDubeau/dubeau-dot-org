// Components
import { Routes, Route } from "react-router-dom";

// Functions
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Fun from "./pages/Fun";
import Contact from "./pages/Contact";
import Geek from "./pages/Geek/Geek";
import Astros from "./pages/Astros";
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
                    path="/astros"
                    element={<Astros data={data} setData={setData} />}
                />
                <Route
                    path="/trackers"
                    element={<Trackers setData={setData} data={data} />}
                />
                <Route
                    path="/servers/*"
                    element={<Trackers setData={setData} data={data} />}
                />
            </Routes>
        </>
    );
}

export default App;
