import Frame from "../../components/Frame";
import UnderContruction from "../../components/UnderConstruction";

export default function (props) {
    return (
        <>
            <Frame
                noNavbar
                data={props.data}
            >
                <UnderContruction heading="Dayplanner is under construction."/>
            </Frame>
        </>
    );
}
