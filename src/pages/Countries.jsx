import Frame from "../components/Frame";
import UnderConstruction from "../components/UnderConstruction";

export default function Countries(props) {
    return (
        <Frame data={props.data}>
            <UnderConstruction>
                <p>Countries page under construction.</p>
            </UnderConstruction>
        </Frame>
    );
}
