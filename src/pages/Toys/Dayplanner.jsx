import Frame from "../../components/Frame";
import UnderContruction from "../../components/UnderConstruction";

export default function (props) {
    return (
        <>
            <Frame
                noNavbar
                data={props.data}
            >
                {/* <UnderContruction heading="Dayplanner is under construction." /> */}
                <div className="flex h-screen flex-col justify-center">
                    <div
                        id="tasks-container"
                        className="my-auto flex flex-col gap-2 rounded bg-lighten-800 p-2"
                    >
                        <p className="p-2 shadow text-darken-600 bg-blue-400 rounded">Look at bike</p>
                        <p className="p-2 shadow text-darken-600 bg-red-400 rounded">Play with VR headset</p>
                        <p className="p-2 shadow text-darken-600 bg-green-400 rounded">Something else</p>
                    </div>
                </div>
            </Frame>
        </>
    );
}
