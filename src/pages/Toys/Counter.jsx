import Frame from "../../components/Frame";
import { Link } from "react-router-dom";

export default function (props) {
    return (
        <>
            <Frame noNavbar vignette data={props.data}>
                <div className="mt-10">
                    <h1 className="mb-8 font-header text-3xl font-light tracking-tighter text-darken-700 max-sm:text-5xl">
                        Under Construction
                    </h1>

                    <Link to="/fun">
                        Back to home
                    </Link>
                </div>
            </Frame>
        </>
    );
}
