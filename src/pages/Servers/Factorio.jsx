import ServerPage from "./ServerPage";
import PackImg from "../../assets/factorio-banner.webp";

export default function Factorio(props) {
    return (
        <ServerPage
            {...props}
            title="Factorio"
            subtitle="A modded 2.0 server for Space Age factory projects."
            image={PackImg}
            imageAlt="A Factorio gameplay screenshot of a small factory."
            address="factorio.dubeau.org"
            tags={["Factorio", "Space Age", "Referral access"]}
            notices={[
                {
                    title: "DLC required",
                    tone: "warning",
                    body: (
                        <p>
                            This server requires the Factorio: Space Age DLC to
                            join.
                        </p>
                    ),
                },
                {
                    title: "Referral access",
                    body: (
                        <p>
                            Referrals are granted through Steam friends. Message
                            an admin on Discord to report problems or request
                            help.
                        </p>
                    ),
                },
            ]}
            sections={[
                {
                    title: "Join via server address",
                    children: (
                        <ol className="list-decimal space-y-3 pl-5">
                            <li>
                                Gain access by joining through an allowed Steam
                                friend or by contacting us on Discord.
                            </li>
                            <li>Launch Factorio with Space Age installed.</li>
                            <li>
                                Choose Multiplayer, then Connect to address.
                            </li>
                            <li>
                                Enter{" "}
                                <span className="font-semibold text-blue-700">
                                    factorio.dubeau.org
                                </span>
                                .
                            </li>
                            <li>
                                Read the first-join server rules in chat before
                                building.
                            </li>
                        </ol>
                    ),
                    actions: [{ label: "Join Discord", to: "/contact" }],
                },
                {
                    title: "Join through Steam",
                    children: (
                        <ol className="list-decimal space-y-3 pl-5">
                            <li>
                                Your friend must already be active on the
                                Factorio server.
                            </li>
                            <li>Open Steam, then open your friends list.</li>
                            <li>
                                Right-click your friend profile and choose Join
                                Game.
                            </li>
                            <li>
                                After the first join, recently played servers
                                appear near the top of Factorio's public server
                                list.
                            </li>
                        </ol>
                    ),
                },
            ]}
            updated="January 4, 2025"
        />
    );
}
