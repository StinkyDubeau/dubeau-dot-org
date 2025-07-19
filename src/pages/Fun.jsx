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
            {/* The above things, done well, can be standardized for the entire site. Even including sub-pages on links. */}
            {/* If Executed exceedingly well, this could even serve as a powerful UI foundation for the Idle game experiment at https://www.dubeau.org/idle */}

            <div className="my-5 flex w-full flex-col justify-center gap-8 px-2">
                {/* P2P CHAT */}
                <motion.div
                    layoutId="ChatGradientBackground"
                    className="w-full animate-gradient-x rounded-2xl bg-gradient-to-bl from-orange-700 via-pink-500 to-yellow-400 bg-blend-lighten"
                >
                    <div className="m-5 flex flex-col gap-4">
                        <motion.p className="text-left font-header text-5xl text-lighten-800">
                            Peer to peer chat
                        </motion.p>
                        <motion.p className="text-left font-header text-lg text-lighten-700">
                            Serverless and ephemeral chat. I was going to make a
                            pictochat clone, but I realized that's ABD.
                        </motion.p>
                    </div>
                    <motion.div
                        layout
                        className="m-5 flex animate-gradient-x flex-wrap justify-center gap-4 rounded-2xl p-4 sm:gap-8"
                    >
                        <Link
                            className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            to="/chat"
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                ⌨️ Connect
                            </p>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* GAME SERVERS */}
                <div className="w-full animate-gradient-x rounded-2xl bg-gradient-to-br from-blue-400 via-cyan-400 to-orange-300">
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
                    <div className="my-5 flex flex-wrap justify-evenly gap-4 rounded-2xl px-6 py-4 sm:gap-8">
                        <AnimatePresence>
                            <ServerCard
                                title="Neobeau"
                                subtitle="Modded Minecraft"
                                img={ModdedBanner}
                                to="/servers/modded"
                                announcement="new modpack!"
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
                    className="w-full animate-gradient-x rounded-2xl bg-gradient-to-bl from-pink-700  via-purple-600 to-zinc-200 p-2"
                >
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
                            className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            to="/fun/tabs"
                        >
                            <p className="p-2 font-header font-medium text-darken-800">
                                🎸 Guitar
                            </p>
                        </Link>
                        {props.data.experimental && (
                            <div className="flex gap-2 max-sm:flex-col">
                                <Link
                                    className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    to="/fun/widgets"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        📱 Widgets
                                    </p>
                                </Link>
                                <Link
                                    className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    to="/blog"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        📓 Blog
                                    </p>
                                </Link>
                                <Link
                                    className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    to="/fun/gallery"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        🖼️ Gallery
                                    </p>
                                </Link>
                                <Link
                                    className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    to="/dayplanner"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        📅 Dayplanner
                                    </p>
                                </Link>
                                <Link
                                    className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    to="/idle"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        ♾️ Idle Game
                                    </p>
                                </Link>
                                <Link
                                    className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
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
                            className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
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
                    className="w-full animate-gradient-x rounded-2xl bg-gradient-to-tl from-yellow-400 via-orange-400 to-zinc-200"
                >
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
                        {props.data.experimental ? (
                            <>
                                <Link
                                    className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    to="/fun/gallery"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        🖼️ Astro Gallery
                                    </p>
                                </Link>
                                <Link
                                    className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    to="/dayplanner"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        Astro of the day
                                    </p>
                                </Link>
                                <Link
                                    className="flex min-w-24 flex-col justify-center rounded-2xl  bg-lighten-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    to="/fun/idle"
                                >
                                    <p className="p-2 font-header font-medium text-darken-800">
                                        Submit a sighting
                                    </p>
                                </Link>
                            </>
                        ) : (
                            <p className="text-left font-header text-3xl text-darken-300">
                                Coming soon.
                            </p>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
