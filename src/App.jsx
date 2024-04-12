import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servers from "./pages/Servers";
import Contact from "./pages/Contact";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />.
                <Route path="/servers" element={<Servers />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
