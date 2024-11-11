import Frame from "../components/Frame";
import Panel from "../components/Panel";
import fun from "./Fun";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavButtons from "../components/NavButtons";
import Button from "../components/Button";
import ServerCard from "../components/ServerCard";

import ModdedBanner from "../assets/modded-banner.png";

export default function Home(props) {
    return (
        <div>
            <Frame
                data={props.data}
                noNavbar
            >
                <div className="flex h-screen flex-col justify-center gap-4">
                    <Panel className="">
                        <div className="flex justify-center py-8 sm:p-12">
                            <h1 className="font-header text-5xl font-light tracking-tighter text-darken-700 max-sm:text-5xl">
                                dubeau.org
                            </h1>
                            {/* <div className="flex flex-col justify-center text-2xl italic text-darken-500 max-sm:text-2xl">
                            dot
                        </div>
                        <h1 className="font-headerScript text-6xl text-darken-700 max-sm:text-5xl">
                        org
                    </h1> */}
                        </div>
                    </Panel>
                    <Panel className="">
                        <div className="flex justify-center gap-2">
                            <div className="m-2 flex h-16 justify-center p-1  sm:w-96">
                                <NavButtons />
                            </div>
                        </div>
                    </Panel>
                </div>
            </Frame>
        </div>
    );
}
