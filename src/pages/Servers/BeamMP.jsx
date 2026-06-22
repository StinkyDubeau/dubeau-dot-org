import ServerPage from "./ServerPage";
import PackImg from "../../assets/beam-banner.webp";

export default function BeamMP(props) {
    return (
        <ServerPage
            {...props}
            title="BeamNG.drive"
            subtitle="BeamMP sessions with Automation support."
            image={PackImg}
            imageAlt="A rally car jumping over a dirt hill."
            tags={["BeamMP", "Events", "Invite-only"]}
            notices={[
                {
                    title: "Invite-only sessions",
                    body: (
                        <p>
                            Sessions are coordinated in Discord. Join there for
                            event times, mod requirements, and connection
                            details.
                        </p>
                    ),
                },
            ]}
            sections={[
                {
                    title: "Join an event",
                    children: (
                        <ol className="list-decimal space-y-3 pl-5">
                            <li>Join Discord and check the BeamMP event thread.</li>
                            <li>Install the listed mod pack before the session.</li>
                            <li>
                                Launch BeamMP and connect using the event
                                details posted for that session.
                            </li>
                        </ol>
                    ),
                    actions: [{ label: "Join Discord", to: "/contact" }],
                },
            ]}
            updated="December 31, 2024"
        />
    );
}
