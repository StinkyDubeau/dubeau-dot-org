import ServerPage from "./ServerPage";
import PackImg from "../../assets/dubeau-banner.webp";
import whitelist from "../../assets/whitelist.json";

export default function Vanilla(props) {
    return (
        <ServerPage
            {...props}
            title="Vanilla"
            subtitle="An invite-only Minecraft community."
            image={PackImg}
            imageAlt="A Minecraft town at nighttime."
            address="mc.dubeau.org"
            tags={["Minecraft", "Java", "Bedrock", "Whitelisted"]}
            notices={[
                {
                    title: "Whitelisted server",
                    tone: "good",
                    body: (
                        <>
                            <p>This server is only open to registered users.</p>
                            <p className="mt-2">
                                Ask an admin on Discord for help.
                            </p>
                        </>
                    ),
                },
            ]}
            facts={[
                { label: "World seed", value: "-890605254126312509" },
                { label: "Spawn generation", value: "Tectonic 1.21.11" },
                { label: "Render distance", value: "32 chunks" },
                { label: "Simulation distance", value: "16 chunks" },
            ]}
            sections={[
                {
                    title: "Join on Java Edition",
                    children: (
                        <ol className="list-decimal space-y-3 pl-5">
                            <li>
                                Connect with us on Discord so an admin can add
                                you to the whitelist.
                            </li>
                            <li>Download and launch Minecraft Java Edition.</li>
                            <li>
                                Connect to{" "}
                                <span className="font-semibold text-blue-700">
                                    mc.dubeau.org
                                </span>
                                .
                            </li>
                            <li>Follow posted signs for general rules.</li>
                        </ol>
                    ),
                    actions: [{ label: "Join Discord", to: "/contact" }],
                },
                {
                    title: "Join on Bedrock Edition",
                    children: (
                        <ol className="list-decimal space-y-3 pl-5">
                            <li>
                                Connect with us on Discord so an admin can add
                                you to the whitelist.
                            </li>
                            <li>
                                Download Minecraft from the app store and sign
                                in with a Microsoft account.
                            </li>
                            <li>
                                Choose Play, Servers, then tap Add server.
                            </li>
                            <li>
                                Enter{" "}
                                <span className="font-semibold text-blue-700">
                                    mc.dubeau.org
                                </span>{" "}
                                as the address, then tap Add and play.
                            </li>
                            <li>Follow posted signs for general rules.</li>
                        </ol>
                    ),
                    actions: [{ label: "Join Discord", to: "/contact" }],
                },
                {
                    title: "Access",
                    eyebrow: "Need help?",
                    children: (
                        <p>
                            If the server refuses your connection, use the
                            Discord contact path first. That keeps whitelist
                            requests and support in the same place.
                        </p>
                    ),
                    actions: [{ label: "Contact", to: "/contact" }],
                },
            ]}
            players={whitelist}
            updated="Mar 1, 2026"
        />
    );
}
