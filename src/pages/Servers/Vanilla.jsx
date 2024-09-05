import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function fun(props) {
    return (
        <Frame data={props.data}>
            <div>
                <div className="w-xl">
                    <div className="m-5">
                        <p className="text-left font-header text-5xl text-darken-800">
                            Vanilla
                        </p>

                        <p className="text-left font-regular text-xl">
                            An invite-only 1.21 minecraft server community
                        </p>
                    </div>
                    {/* Gradient bg */}
                    <div className="m-5 ">
                        <p className="text-left font-header text-3xl text-darken-800">
                            How to join
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            1. You must be whitelisted to play!
                        </p>
                        <div className="flex w-full gap-2">

                        </div>
                        <p className="text-left font-header text-xl text-darken-800">
                            > The easy way
                        </p>
                        <p className="text-left font-header text-xl text-darken-800">
                            > The reccomended way
                        </p>

                        <p className="text-left text-lg text-darken-800">
                            Simple method
                        </p>
                    </div>
                </div>
            </div>
        </Frame>
    );
}
