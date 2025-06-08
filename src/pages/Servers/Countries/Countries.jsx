import Frame from "../../../components/Frame";
import UnderConstruction from "../../../components/UnderConstruction";
import World from "./worldmap_paths.json";

export default function Countries(props) {
    // Import the SVG as a React component to manipulate it with code.
    // Make sure your build setup supports this import syntax.

    function CreateCountry(country) {
        // country: XX (iso code), <path> (child of country)
        console.log(country.key);

        return country.path;
    }

    return (
        <>
            <p>Countries page under construction!</p>
            <svg>{World.map(CreateCountry)}</svg>
            {/* Use the SVG as a React component */}
            {/* <World className="bg-blue-200" /> */}
        </>
    );
}
