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
        <Frame data={props.data}>
            <div>
                <div className="">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-800">
                            Decentralized chat
                        </p>
                        <p className="text-left text-lg text-darken-800">
                            Peer-to-peer & end-to-end encryted.
                        </p>
                        {/* <p className="text-left font-regular text-xl">
                            Subtitle
                        </p> */}
                    </div>
                    {/* Gradient bg */}
                    <div className="m-5 flex animate-gradient-x flex-wrap justify-center gap-4 rounded-2xl bg-gradient-to-bl from-slate-300 via-zinc-600 to-slate-400 p-4 sm:gap-8">
                        <Link
                            className="flex aspect-square flex-col justify-center rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-darken-200 p-2  shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-lg"
                            to="/chat"
                        >
                            <p className="mb-1 font-header text-2xl text-lighten-800">
                                Connect
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-800">
                            Game servers
                        </p>
                        <p className="text-left text-lg text-darken-800">
                            These servers are are invite-only. Join our{" "}
                            <Link
                                to="/contact"
                                className="underline underline-offset-1"
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
                    <div className="m-5 flex animate-gradient-x flex-wrap justify-center gap-4 rounded-2xl bg-gradient-to-br from-blue-400 via-cyan-400 to-orange-300 p-4 sm:gap-8">
                        <ServerCard
                            title="Vanilla"
                            subtitle="Minecraft 1.21"
                            img={ModdedBanner}
                            // to="/vanilla"
                            to="/servers/vanilla"
                        />
                        <ServerCard
                            title="Better Than Wolves"
                            subtitle="Modded 1.5.2"
                            img={BetaBanner}
                            // to="/beta"
                            to="/fun"
                        />
                        <ServerCard
                            title="Factorio"
                            subtitle="Modded 1.1.0"
                            img={FactorioBanner}
                            // to="/factorio"
                            to="/contact"
                        />
                        <ServerCard
                            title="DMP"
                            subtitle="Kerbal Space Program"
                            img={KspBanner}
                            // to="/ksp"
                            to="/fun"
                        />
                    </div>
                </div>
                <div className="">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-800">
                            Astro sightings
                        </p>
                        <p className="text-left text-lg text-darken-800">
                            To publish a sighting, join the{" "}
                            <Link
                                to="/contact"
                                className="underline underline-offset-1"
                            >
                                discord
                            </Link>
                            .
                        </p>
                        {/* <p className="text-left font-regular text-xl">
                            Subtitle
                        </p> */}
                    </div>
                    {/* Gradient bg */}
                    <div className="m-5 flex animate-gradient-x flex-wrap justify-center gap-4 rounded-2xl bg-gradient-to-tl from-yellow-400 via-orange-400 to-zinc-200 p-4 sm:gap-8">
                        <p className="text-left font-header text-xl text-lighten-500">
                            Coming soon.
                        </p>
                    </div>
                </div>
            </div>
        </Frame>
    );
}
