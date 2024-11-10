import Panel from "../components/Panel";
import Frame from "../components/Frame";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ServerCard from "../components/ServerCard";

import ModdedBanner from "../assets/modded-banner.png";
import BetaBanner from "../assets/beta-banner.webp";
import VanillaBanner from "../assets/dubeau-banner.png";
import FactorioBanner from "../assets/factorio-banner.jpg";
import RotnBanner from "../assets/rotn-banner.png";
import KspBanner from "../assets/ksp-banner.jpg";

export default function fun(props) {
    return (
        <Frame data={props.data}>
            {/* 
            Social
            - P2P Chat
            - Game Servers
            - Astro Sightings

            Hobby
            - Blog
            - Guitar Tabs
            - Reading List
            */}

            <div className="my-4 flex flex-wrap justify-center">
                <div className="m-4 w-full animate-gradient-x  rounded-2xl bg-blend-lighten bg-gradient-to-bl from-orange-700 via-pink-500 to-yellow-400 ">
                    <div className="m-5 ">
                        <p className="text-left font-header text-5xl text-lighten-800">
                            Decentralized chat
                        </p>
                        <p className="text-left text-lg text-lighten-800">
                            Peer-to-peer & end-to-end encrypted.
                        </p>
                    </div>
                    <div className="m-5 flex animate-gradient-x flex-wrap justify-center gap-4 rounded-2xl p-4 sm:gap-8">
                        <Link
                            className="flex aspect-square flex-col justify-center rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-lighten-200 p-2  shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-lg"
                            to="/chat"
                        >
                            <p className="font-header text-2xl text-lighten-600">
                                Connect
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="m-4 w-full animate-gradient-x rounded-2xl bg-gradient-to-br from-blue-400 via-cyan-400 to-orange-300">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-600">
                            Game servers
                        </p>
                        <p className="text-left text-lg text-darken-600">
                            Most servers are are invite-only. Join our{" "}
                            <Link
                                to="/contact"
                                className="underline underline-offset-1"
                            >
                                discord
                            </Link>{" "}
                            to request access.
                        </p>
                    </div>
                    {/* Gradient bg */}
                    <div className="my-5 flex flex-wrap justify-center gap-4 rounded-2xl py-4 sm:gap-8">
                        <ServerCard
                            title="Vanilla"
                            subtitle="Minecraft 1.21"
                            img={VanillaBanner}
                            // to="/vanilla"
                            to="/servers/vanilla"
                        />

                        <ServerCard
                            title="Modded"
                            subtitle="Fabric 1.20"
                            img={ModdedBanner}
                            to="/servers/modded"
                            style=""
                            colour="bg-red-400"
                            announcement="0.1 live now"
                        />
                        <ServerCard
                            title="Better Than Wolves"
                            subtitle="Modded 1.5.2"
                            img={BetaBanner}
                            // to="/beta"
                            to="/servers/btw"
                        />
                        <ServerCard
                            title="Factorio"
                            subtitle="Modded 2.0"
                            img={FactorioBanner}
                            // to="/factorio"
                            to="/servers/factorio"
                        />
                        <ServerCard
                            title="DMP"
                            subtitle="Kerbal Space Program"
                            img={KspBanner}
                            // to="/ksp"
                            to="/servers/ksp"
                        />
                    </div>
                </div>

                <div className="m-4 w-full animate-gradient-x rounded-2xl bg-gradient-to-bl from-pink-700  via-purple-600 to-zinc-200 p-2">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-lighten-800">
                            Hobby
                        </p>
                        <p className="text-left text-lg text-lighten-800">
                            Jake's personal projects and tools.
                        </p>
                    </div>
                    {/* Gradient bg */}
                    <div className="bg-lighten-80 m-5 flex flex-wrap justify-center gap-2 rounded-xl max-sm:flex-col">
                        <Link
                            className="flex min-w-24 flex-col justify-center rounded-2xl border bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            to="/fun/widgets"
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                📱 Widgets
                            </p>
                        </Link>
                        <Link
                            className="flex min-w-24 flex-col justify-center rounded-2xl border bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            to="/blog"
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                📓 Blog
                            </p>
                        </Link>
                        <Link
                            className="flex min-w-24 flex-col justify-center rounded-2xl border bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            to="/fun/tabs"
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                🎸 Guitar
                            </p>
                        </Link>
                        <Link
                            className="flex min-w-24 flex-col justify-center rounded-2xl border bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            to="/fun/gallery"
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                🖼️ Gallery
                            </p>
                        </Link>
                        <Link
                            className="flex min-w-24 flex-col justify-center rounded-2xl border bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            to="/fun/dayplanner"
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                📅 Dayplanner
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="m-4  w-full animate-gradient-x rounded-2xl bg-gradient-to-tl from-yellow-400 via-orange-400 to-zinc-200">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-600">
                            Astro sightings
                        </p>
                        <p className="text-left text-lg text-darken-600">
                            To publish a sighting, join the{" "}
                            <Link
                                to="/contact"
                                className="underline underline-offset-1"
                            >
                                discord
                            </Link>
                            .
                        </p>
                    </div>
                    {/* Gradient bg */}
                    <div className="m-5 flex flex-wrap justify-center gap-4 rounded-2xl p-4 sm:gap-8">
                        <p className="text-left font-header text-3xl text-darken-300">
                            Coming soon.
                        </p>
                    </div>
                </div>
            </div>
        </Frame>
    );
}
