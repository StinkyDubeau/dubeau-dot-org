import Panel from "../components/Panel";
import Frame from "../components/Frame";
import Button from "../components/BigButton";
import { Link } from "react-router-dom";

export default function Servers(props) {
  return (
    <Frame>
      <Panel>
        <p className="text-white font-regular">Out of order, sorry /:</p>
        <p className="text-white font-regular">
          Join the <a href="https://discord.gg/n5dRq7c3Rv">discord</a> for
          updates.
        </p>
      </Panel>
      <Panel>
        <Link className="font-regular text-white" to="/"><Button>Back to home</Button></Link>
      </Panel>
    </Frame>
  );
}
