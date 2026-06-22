import ServerPage from "./ServerPage";
import PackImg from "../../assets/modded-banner.webp";
import whitelist from "../../assets/whitelist.json";

export default function Modded(props) {
    return (
        <ServerPage
            {...props}
            title="Neobeau"
            subtitle="A vanilla-ish Minecraft Neoforge server with a maintained modpack."
            image={PackImg}
            imageAlt="A gameplay screenshot of a small Minecraft factory with machinery."
            address="mc.dubeau.org:25569"
            tags={["Minecraft", "Neoforge", "Modpack", "Whitelisted"]}
            notices={[
                {
                    title: "Whitelisted server",
                    tone: "good",
                    body: (
                        <p>
                            This server is only open to registered users. Message
                            an admin on Discord if you have not been whitelisted.
                        </p>
                    ),
                },
                {
                    title: "Current pack",
                    body: (
                        <p>
                            Neobeau v0.3 includes controller support, dynamic
                            lights, minimap support, freecam, and one-player
                            sleep.
                        </p>
                    ),
                },
            ]}
            facts={[
                { label: "World seed", value: "-3185478975619901032" },
                { label: "Spawn generation", value: "Vanilla 1.20.4" },
                { label: "Render distance", value: "16 chunks" },
                { label: "Simulation distance", value: "16 chunks" },
            ]}
            sections={[
                {
                    title: "Install the modpack",
                    children: (
                        <ol className="list-decimal space-y-3 pl-5">
                            <li>Download and install Prism Launcher.</li>
                            <li>
                                Open Prism Launcher, add your Microsoft account,
                                then import the Neobeau ZIP.
                            </li>
                            <li>
                                Double click Neobeau to launch it. The first
                                launch can take several minutes.
                            </li>
                            <li>
                                Connect to{" "}
                                <span className="font-semibold text-blue-700">
                                    mc.dubeau.org:25569
                                </span>
                                .
                            </li>
                        </ol>
                    ),
                    actions: [
                        {
                            label: "Download Neobeau v0.3",
                            href: "http://files.dubeau.org/neobeau%20v03.zip",
                        },
                        {
                            label: "Prism Launcher",
                            href: "https://prismlauncher.org/download/",
                        },
                        { label: "Join Discord", to: "/contact" },
                    ],
                },
                {
                    title: "Modpack notes",
                    children: (
                        <div className="space-y-3">
                            <p>
                                Create Steam and Rails is currently excluded
                                while it waits for compatibility with Create
                                v6.0.
                            </p>
                            <p>
                                Press the minimap keybind in-game to toggle the
                                map and adjust zoom from the client controls.
                            </p>
                        </div>
                    ),
                },
            ]}
            players={whitelist}
            updated="April 26, 2025"
        />
    );
}
