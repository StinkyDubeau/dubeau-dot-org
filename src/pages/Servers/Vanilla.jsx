import Panel from "../../components/Panel";
import Frame from "../../components/Frame";
import Button from "../../components/Button";
import { Link } from "react-router-dom";


export default function fun(props) {
    return (
        <Frame data={props.data}>
            <div>
                <div className="w-screen">
                    <h1>BALLS!</h1>
                </div>
            </div>
        </Frame>
    );
}
