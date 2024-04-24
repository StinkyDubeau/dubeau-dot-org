import Panel from "../components/Panel";
import Frame from "../components/Frame";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ServerCard from "../components/ServerCard";

import ModdedBanner from "../assets/modded-banner.png";
import BetaBanner from "../assets/beta-banner.webp";
import ModernBanner from "../assets/modern-banner.jpeg";
import FactorioBanner from "../assets/factorio-banner.jpg";
import RotnBanner from "../assets/rotn-banner.png";
import KspBanner from "../assets/ksp-banner.jpg";

export default function fun(props) {
    return (
        <Frame>
            <div>
                <div className="w-screen">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-800">
                            game servers
                        </p>
                        <p className="text-left text-lg text-darken-800">
                            These servers are are invite-only. Join our{" "}
                            <Link
                                to="/contact"
                                className="font-header text-xl underline underline-offset-1"
                            >
                                discord
                            </Link>{" "}
                            to get access.
                        </p>
                        {/* <p className="text-left font-regular text-xl">
                            Subtitle
                        </p> */}
                    </div>
                    {/* Gradient bg */}
                    <div className="m-5 flex animate-gradient-x flex-wrap justify-center gap-4 rounded-lg bg-gradient-to-br from-blue-400 via-cyan-400 to-orange-300 p-4 sm:gap-8">
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
                            to="/vanilla"
                        />
                        <ServerCard
                            title="Beta"
                            subtitle="Minecraft, 1.7.3"
                            img={BetaBanner}
                            to="/beta"
                        />
                        <ServerCard
                            title="Factorio"
                            subtitle="Modded, 1.1.0"
                            img={FactorioBanner}
                            to="/factorio"
                        />
                        <ServerCard
                            title="DMP"
                            subtitle="Kerbal Space Program"
                            img={KspBanner}
                            to="/ksp"
                        />
                    </div>
                </div>
                <div className="w-screen">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-800">
                            astro sightings
                        </p>
                        <p className="text-left text-lg text-darken-800">
                            To publish a sighting, join{" "}
                            <Link
                                to="/contact"
                                className="font-header text-xl underline underline-offset-1"
                            >
                                the discord
                            </Link>{" "}
                            .
                        </p>
                        {/* <p className="text-left font-regular text-xl">
                            Subtitle
                        </p> */}
                    </div>
                    {/* Gradient bg */}
                    <div className="m-5 flex animate-gradient-x flex-wrap justify-center gap-4 rounded-lg bg-gradient-to-tl from-yellow-400 via-orange-400 to-zinc-200 p-4 sm:gap-8">
                        <p className="text-left text-xl text-lighten-500 font-header">
                            Coming soon.
                        </p>
                    </div>
                </div>
            </div>
        </Frame>
    );
}