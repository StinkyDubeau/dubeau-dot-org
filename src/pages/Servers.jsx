import Panel from "../components/Panel";
import Frame from "../components/Frame";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ModdedBanner from "../assets/modded-banner.png";

export default function Servers(props) {
    return (
        <Frame>
            <img src={ModdedBanner}></img>
            <div className="grid">
                <div class="animate-gradient-x via-purple-500to-orange-500 flex h-64 items-center justify-center bg-gradient-to-r from-blue-400">
                    {" "}
                </div>
            </div>
        </Frame>
    );
}
