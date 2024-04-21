import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fun from "./pages/Fun";
import Contact from "./pages/Contact";
import Geek from "./pages/Geek";
import Astros from "./pages/Astros";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />.
                <Route path="/fun" element={<Fun />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/geek" element={<Geek />} />
                <Route path="/astros" element={<Astros />} />
            </Routes>
        </>
    );
}

export default App;
