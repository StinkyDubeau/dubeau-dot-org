import Frame from "../components/Frame";
import BigButton from "../components/BigButton";
import Panel from "../components/Panel";
import fun from "./Fun";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavButtons from "../components/NavButtons";

export default function Home(props) {
    return (
        <div>
            <Frame
                data={props.data}
                noNavbar
            >
                <Panel className="m-4">
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
                <Panel className="m-4">
                    <div className="-mt-6 flex justify-center gap-2">
                        <div className="m-2 flex h-16 justify-center p-1  sm:w-96">
                            <NavButtons />
                        </div>
                    </div>
                </Panel>
            </Frame>
        </div>
    );
}
