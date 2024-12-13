import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vagueTime from "vague-time";

import Frame from "../../../components/Frame";
import Panel from "../../../components/Panel";
import Button from "./Components/Button";
import Slider from "./Components/Slider";
import UIMockup from "./Components/UIMockup";
import FrameworkTest from "./Components/FrameworkTest";

export default function Main(props) {
    return (
        <Frame
            data={props.data}
            noScroll
        >
            <FrameworkTest />
            <UIMockup />
        </Frame>
    );
}
