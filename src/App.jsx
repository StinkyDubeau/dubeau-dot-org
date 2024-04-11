import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servers from "./pages/Servers";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />.
                <Route path="/servers" element={<Servers />} />
            </Routes>
        </>
    );
}

export default App;
