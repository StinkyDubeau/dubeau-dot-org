import { Link } from "react-router-dom";
import ServerCard from "../components/ServerCard";
import { AnimatePresence, motion } from "framer-motion";

import ModdedBanner from "../assets/modded-banner.webp";
import BetaBanner from "../assets/beta-banner.webp";
import VanillaBanner from "../assets/dubeau-banner.webp";
import FactorioBanner from "../assets/factorio-banner.webp";
import KspBanner from "../assets/ksp-banner.webp";
import BeamBanner from "../assets/beam-banner.webp";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Fun(props) {
    // Ensure page always has navbar
    useEffect(() => {
        props.setData({
            ...props.data,
            noNavbar: false,
            vignette: false,
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0.6, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.6, x: -50 }}
            layout
            className="w-svw max-w-screen-lg"
        >
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

            {/* Make a scrolling fullscreen view for the cards */}
            {/* A zoomed out version with short summary cards that toggles into fullscreen versions when tapped */}
            {/* The above things, done well, can be standardized for the entire site. Even sub-pages on links. */}
            {/* If Executed exceedingly well, this could even serve as a powerful UI foundation for the Idle game experiment at https://www.dubeau.org/idle */}

            <div className="my-5 flex w-full flex-col justify-center gap-8 px-2 sm:px-8">
                {/* P2P CHAT */}
                <motion.div
                    layoutId="ChatGradientBackground"
                    className={`w-full animate-gradient-x rounded-2xl bg-gradient-to-bl from-yellow-600 via-orange-500 to-pink-500 bg-blend-lighten ${props.data.highContrast && "bg-darken-800"}`}
                >
                    <div className="m-5 flex flex-col gap-4">
                        <motion.p className="text-left font-header text-5xl text-lighten-800">
                            Peer to peer chat
                        </motion.p>
                        <motion.p className="text-left font-header text-lg text-lighten-700">
                            Serverless, ephemeral chat.
                        </motion.p>
                    </div>
                    <motion.div
                        layout
                        className="m-5 flex animate-gradient-x flex-wrap justify-center gap-4 rounded-2xl p-4 sm:gap-8"
                    >
                        <Link
                            className="lit-control flex min-w-24 cursor-default flex-col justify-center rounded-2xl px-2 py-1 shadow-lg"
                            to="/chat"
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                ⌨️ Connect
                            </p>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* GAME SERVERS */}
                <div className="w-full animate-gradient-x rounded-2xl bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-400">
                    <div className="m-5 flex flex-col gap-4">
                        <p className="text-left font-header text-5xl text-darken-600">
                            Game servers
                        </p>
                        <p className="text-left font-header text-lg text-darken-600">
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
                    <div className="my-5 flex flex-wrap justify-evenly gap-4 rounded-2xl px-6 py-4 sm:gap-8">
                        <AnimatePresence>
                            <ServerCard
                                title="Neobeau"
                                subtitle="Modded Minecraft"
                                img={ModdedBanner}
                                to="/servers/modded"
                                announcement=""
                                alt="The icon for Modded Minecraft's Server page. The image features a gameplay screenshot of a small factory with lots of machinery and parts."
                            />
                            <ServerCard
                                id="vanilla"
                                title="Minecraft"
                                subtitle="Vanilla 1.21.5"
                                img={VanillaBanner}
                                // announcement="new version!"
                                to="/servers/vanilla"
                                alt="The icon for Vanilla Minecraft's Server page. The image features a screenshot of a Minecraft town at nighttime."
                            />
                            <ServerCard
                                title="Better Than Wolves"
                                subtitle="Modded 1.5.2"
                                img={BetaBanner}
                                to="/servers/btw"
                                alt="The icon for Better than Wolves's Server page. The image features an old-school Minecraft gameplay screenshot of a grassy hill."
                            />
                            <ServerCard
                                title="Factorio"
                                subtitle="Modded 2.0"
                                img={FactorioBanner}
                                to="/servers/factorio"
                                alt="The icon for Factorio's Server page. The image features a gameplay screenshot of a small factory."
                            />
                            {props.data.experimental && (
                                // In-progress server pages.
                                <>
                                    <ServerCard
                                        title="BeamNG"
                                        subtitle="BeamMP Events"
                                        img={BeamBanner}
                                        to="/servers/beam"
                                        alt="The icon for BeamNG's Server page. The image features a rally car jumping over a dirt hill."
                                    />
                                    <ServerCard
                                        title="DMP"
                                        subtitle="Kerbal Space Program"
                                        img={KspBanner}
                                        to="/servers/ksp"
                                        alt="The icon for Kerbal Space Program's Server page. The image features a rocketship flying near Mars."
                                    />
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* HOBBY */}
                <motion.div
                    layout
                    className="w-full animate-gradient-x rounded-2xl bg-gradient-to-bl from-pink-700  via-purple-600 to-blue-200 p-2"
                >
                    <div className="m-5 flex flex-col gap-4">
                        <p className="text-left font-header text-5xl text-lighten-800">
                            Hobby
                        </p>
                        <p className="text-left font-header text-lg text-lighten-800">
                            My personal projects and tools.
                        </p>
                    </div>
                    {/* Gradient bg */}
                    <div className="bg-lighten-80 m-5 flex flex-wrap justify-center gap-2 rounded-xl max-sm:flex-col">
                        <Link
                            className="lit-control flex min-w-24 cursor-default flex-col justify-center rounded-2xl px-2 py-1 shadow-lg"
                            to="/fun/tabs"
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                🎸 Guitar
                            </p>
                        </Link>
                        {props.data.experimental && (
                            <div className="flex gap-2 max-sm:flex-col">
                                <Link
                                    className="lit-control flex min-w-24 cursor-default flex-col justify-center rounded-2xl px-2 py-1 shadow-lg"
                                    to="/fun/widgets"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        📱 Widgets
                                    </p>
                                </Link>
                                <Link
                                    className="lit-control flex min-w-24 cursor-default flex-col justify-center rounded-2xl px-2 py-1 shadow-lg"
                                    to="/blog"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        📓 Blog
                                    </p>
                                </Link>
                                <Link
                                    className="lit-control flex min-w-24 cursor-default flex-col justify-center rounded-2xl px-2 py-1 shadow-lg"
                                    to="/fun/gallery"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        🖼️ Gallery
                                    </p>
                                </Link>
                                <Link
                                    className="lit-control flex min-w-24 cursor-default flex-col justify-center rounded-2xl px-2 py-1 shadow-lg"
                                    to="/dayplanner"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        📅 Dayplanner
                                    </p>
                                </Link>
                                <Link
                                    className="lit-control flex min-w-24 flex-col justify-center rounded-2xl px-2 py-1 shadow-lg"
                                    to="/idle"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        ♾️ Idle Game
                                    </p>
                                </Link>
                                <Link
                                    className="lit-control flex min-w-24 cursor-default flex-col justify-center rounded-2xl px-2 py-1 shadow-lg"
                                    to="/countries"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        🌏 Countries Quiz
                                    </p>
                                </Link>
                            </div>
                        )}
                        <Link
                            to="/trackers"
                            layoutId="Experimental"
                            className="lit-control flex min-w-24 cursor-default flex-col justify-center rounded-2xl px-2 py-1 shadow-lg"
                            // onClick={() => {
                            //     props.setData({
                            //         ...props.data,
                            //         experimental: true,
                            //     });
                            // }}
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                ⚙️ Experiments
                            </p>
                        </Link>
                    </div>
                </motion.div>

                {/* ASTRO SIGHTINGS */}
                <motion.div
                    layout
                    className="w-full animate-gradient-x rounded-2xl bg-gradient-to-tl from-amber-400 via-yellow-400 to-orange-400"
                >
                    <div className="m-5 flex flex-col gap-4">
                        <p className="text-left font-header text-5xl text-darken-600">
                            Astro sightings
                        </p>
                        <p className="text-left font-header text-lg text-darken-600">
                            Astro sightings now lives on its own site.
                        </p>
                    </div>
                    {/* Gradient bg */}
                    <div className="m-5 flex flex-wrap justify-center gap-4 rounded-2xl p-4 sm:gap-8">
                        <a
                            className="lit-control flex min-w-24 cursor-default flex-col justify-center rounded-2xl px-3 py-2 shadow-lg"
                            href="https://astro.sightings.today"
                        >
                            <p className="font-header font-medium text-darken-800">
                                🖼️ Open Astro sightings
                            </p>
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
