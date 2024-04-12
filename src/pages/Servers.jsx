import Panel from "../components/Panel";
import Frame from "../components/Frame";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ServerCard from "../components/ServerCard";

import ModdedBanner from "../assets/modded-banner.png";
import BetaBanner from "../assets/beta-banner.webp";
import ModernBanner from "../assets/modern-banner.jpeg";
import FactorioBanner from "../assets/factorio-banner.jpg";
import RotnBanner from "../assets/rotn-banner.png"

export default function Servers(props) {
    return (
        <Frame>
            <div className="grid">
                <div className="w-screen">
                    <div>
                        <p>I run some game servers</p>
                    </div>
                    {/* Gradient bg */}
                    <div className="animate-gradient-x m-5 flex flex-wrap justify-center gap-8 rounded-lg bg-gradient-to-br from-blue-400 via-cyan-400 to-green-400 p-4">
                        <ServerCard
                            title="RotN"
                            subtitle="Modded Minecraft"
                            img={RotnBanner}
                            to="/modded"
                        />
                        <ServerCard
                            title="Vanilla"
                            subtitle="Minecraft, 1.20.4"
                            img={ModdedBanner}
                            to="/modded"
                        />
                        <ServerCard
                            title="Beta"
                            subtitle="Minecraft, 1.7.3"
                            img={BetaBanner}
                            to="/modded"
                        />
                        <ServerCard
                            title="Factorio"
                            subtitle="Modded, 1.1.0"
                            img={FactorioBanner}
                            to="/factorio"
                        />
                    </div>
                </div>
            </div>
        </Frame>
    );
}
