
import NavButtons from "./NavButtons";

export default function Navbar(props) {
    return (
        <div className="fixed z-50 mx-auto w-full bg-lighten-600 shadow-lg backdrop-blur-3xl">
            <NavButtons />
        </div>
    );
}
