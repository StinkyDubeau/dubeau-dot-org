import ServerPage from "./ServerPage";
import PackImg from "../../assets/ksp-banner.webp";

export default function KSP(props) {
    return (
        <ServerPage
            {...props}
            title="Kerbal Space Program"
            subtitle="A Dark Multiplayer server for shared missions."
            image={PackImg}
            imageAlt="A rocket ship flying near Mars."
            tags={["KSP", "Dark Multiplayer", "Invite-only"]}
            notices={[
                {
                    title: "Setup in progress",
                    body: (
                        <p>
                            The public instructions are still being assembled.
                            Discord has the current connection details.
                        </p>
                    ),
                },
            ]}
            sections={[
                {
                    title: "Join with Steam",
                    children: (
                        <ol className="list-decimal space-y-3 pl-5">
                            <li>Join Discord to request access.</li>
                            <li>Install Kerbal Space Program and the current mod list.</li>
                            <li>
                                Connect through Dark Multiplayer using the
                                server details posted in Discord.
                            </li>
                        </ol>
                    ),
                    actions: [{ label: "Join Discord", to: "/contact" }],
                },
            ]}
            updated="September 5, 2024"
        />
    );
}
