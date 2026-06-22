import ServerPage from "./ServerPage";
import PackImg from "../../assets/beta-banner.webp";

export default function BetterThanWolves(props) {
    return (
        <ServerPage
            {...props}
            title="Better Than Wolves"
            subtitle={'A challenging "back-to-beta" Minecraft modpack.'}
            image={PackImg}
            imageAlt="An old-school Minecraft gameplay screenshot of a grassy hill."
            address="mc.dubeau.org:25575"
            tags={["Minecraft", "Beta", "Public", "Hardcore"]}
            notices={[
                {
                    title: "Public server",
                    tone: "warning",
                    body: (
                        <p>
                            This server is not whitelisted and does not have
                            formal moderation. Anybody can join.
                        </p>
                    ),
                },
                {
                    title: "Hardcore mode",
                    tone: "danger",
                    body: (
                        <p>
                            Death sends you to a new random spawn location. The
                            spawn sequence is shared by all players.
                        </p>
                    ),
                },
            ]}
            sections={[
                {
                    title: "Join with MultiMC",
                    children: (
                        <ol className="list-decimal space-y-3 pl-5">
                            <li>
                                Join Discord first if you want support before
                                connecting.
                            </li>
                            <li>Download MultiMC for your operating system.</li>
                            <li>
                                Download the Better Than Wolves instance from
                                the community release page.
                            </li>
                            <li>
                                Add your Microsoft account in MultiMC, import the
                                ZIP, then launch the instance.
                            </li>
                            <li>
                                Connect to{" "}
                                <span className="font-semibold text-blue-700">
                                    mc.dubeau.org:25575
                                </span>
                                .
                            </li>
                        </ol>
                    ),
                    actions: [
                        {
                            label: "MultiMC",
                            href: "https://multimc.org/",
                        },
                        {
                            label: "BTW releases",
                            href: "https://github.com/BTW-Community/cursed-fabric-loader/releases",
                        },
                        { label: "Join Discord", to: "/contact" },
                    ],
                },
            ]}
            updated="September 5, 2024"
        />
    );
}
