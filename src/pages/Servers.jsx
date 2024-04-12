import Panel from "../components/Panel";
import Frame from "../components/Frame";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ModdedBanner from "../assets/modded-banner.png";
import ServerCard from "../components/ServerCard";

export default function Servers(props) {
    return (
        <Frame>
            <div className="grid">
                <div className="w-screen">
                    {/* Gradient bg */}
                    <div class="animate-gradient-x grid items-center justify-center gap-2 bg-gradient-to-br from-blue-400 via-cyan-400 to-green-400 p-2">
                        <ServerCard title="Modded" subtitle="Create mod" img={ModdedBanner} to="/modded" />
                    </div>
                </div>
            </div>
        </Frame>
    );
}
