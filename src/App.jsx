import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fun from "./pages/Fun";
import Contact from "./pages/Contact";
import Geek from "./pages/Geek/Geek";
import Astros from "./pages/Astros";
import Trackers from "./pages/Trackers";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />.
                <Route path="/fun" element={<Fun />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/geek" element={<Geek />} />
                <Route path="/astros" element={<Astros />} />
                <Route path="/trackers" element={<Trackers />} />
            </Routes>
        </>
    );
}

export default App;
