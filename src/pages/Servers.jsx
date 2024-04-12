import Panel from "../components/Panel";
import Frame from "../components/Frame";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ModdedBanner from "../assets/modded-banner.png";

export default function Servers(props) {
    return (
        <Frame>
            <div className="grid">
                <div className="w-screen">
                    {/* Gradient bg */}
                    <div class="animate-gradient-x grid items-center justify-center gap-2 bg-gradient-to-br from-blue-400 via-cyan-400 to-green-400 p-2">
                        <div className="card h-44 w-36 overflow-hidden rounded-xl bg-slate-50 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                            <Link to="/modded">
                                <img
                                    className="h-full object-clip"
                                    src={ModdedBanner}
                                ></img>
                                <div className="relative top-[-60%]">
                                    <p className="font-headerScript text-3xl text-white">
                                        Modded
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Frame>
    );
}
