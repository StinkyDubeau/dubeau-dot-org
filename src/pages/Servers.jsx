import Panel from "../components/Panel";
import Frame from "../components/Frame";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ModdedBanner from "../assets/modded-banner.png";

export default function Servers(props) {
    return (
        <Frame>
            <img src={ModdedBanner}></img>
            <Panel>
                <p className="font-regular text-white">
                    Out of order, sorry /:
                </p>

                <p className="font-regular text-white">
                    Join the{" "}
                    <a href="https://discord.gg/n5dRq7c3Rv">
                        <span className="underline">discord</span>
                    </a>{" "}
                    for updates.
                </p>
            </Panel>
        </Frame>
    );
}
