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

            <div className="flex flex-wrap justify-center">
                <div className="rounded-2xl w-full m-4 animate-gradient-x bg-gradient-to-bl from-orange-700 via-pink-500 to-yellow-400 ">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-lighten-800">
                            Decentralized chat
                        </p>
                        <p className="text-left text-lg text-lighten-800">
                            Peer-to-peer & end-to-end encrypted.
                        </p>
                    </div>
                    <div className="m-5 flex animate-gradient-x flex-wrap justify-center gap-4 rounded-2xl p-4 sm:gap-8">
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
                <div className="rounded-2xl w-full m-4 animate-gradient-x bg-gradient-to-br from-blue-400 via-cyan-400 to-orange-300">
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
                            img={ModdedBanner}
                            // to="/vanilla"
                            to="/servers/vanilla"
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
                            subtitle="Modded 1.1.0"
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

                <div className="animate-gradient-x bg-gradient-to-bl from-pink-700 via-purple-600 to-zinc-200  rounded-2xl w-full m-4">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-lighten-800">
                            Hobby
                        </p>
                        <p className="text-left text-lg text-lighten-800">
                            Jake's personal projects and tools.
                        </p>
                    </div>
                    {/* Gradient bg */}
                    <div className="m-5 flex flex-wrap justify-center gap-4 rounded-2xl p-4 sm:gap-8">
                        <Link
                            className="min-w-24 flex aspect-square flex-col justify-center rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-darken-200 p-2  shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-lg"
                            to="/fun/counter"
                        >
                            <p className="mb-1 font-header text-2xl text-lighten-800">
                                Counter
                            </p>
                        </Link>
                        <Link
                            className="min-w-24 flex aspect-square flex-col justify-center rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-darken-200 p-2  shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-lg"
                            to="/blog"
                        >
                            <p className="mb-1 font-header text-2xl text-lighten-800">
                                Blog
                            </p>
                        </Link>
                        <Link
                            className="min-w-24 flex aspect-square flex-col justify-center rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-darken-200 p-2  shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-lg"
                            to="/fun/tabs"
                        >
                            <p className="mb-1 font-header text-2xl text-lighten-800">
                                Guitar
                            </p>
                        </Link>
                        <Link
                            className="min-w-24 flex aspect-square flex-col justify-center rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-darken-200 p-2  shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-lg"
                            to="/fun/tabs"
                        >
                            <p className="mb-1 font-header text-2xl text-lighten-800">
                                Photography
                            </p>
                        </Link>
                        <Link
                            className="min-w-24 flex aspect-square flex-col justify-center rounded-xl border border-x-darken-50 border-b-darken-100 border-t-lighten-100 bg-darken-200 p-2  shadow-md backdrop-blur-md transition-all hover:scale-105 hover:shadow-lg"
                            to="/fun/tabs"
                        >
                            <p className="mb-1 font-header text-2xl text-lighten-800">
                                Dayplanner
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="animate-gradient-x  bg-gradient-to-tl from-yellow-400 via-orange-400 to-zinc-200 rounded-2xl w-full m-4">
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
