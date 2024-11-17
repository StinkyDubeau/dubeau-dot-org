import { useState } from "react";

export default function ManualDynamo() {
    const [rpm, setRpm] = useState(0);

    function turn(force) {
        setRpm(rpm + force);
    }
}
