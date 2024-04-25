import NavButtons from "./NavButtons";

export default function Navbar(props) {
    return (
        <div className="fixed z-50 mx-auto w-full bg-lighten-600 shadow-lg backdrop-blur-3xl">
            <NavButtons />
            {props.data && 
                <div className="bg-red-500">
                    <p className="font-header text-lighten-800">
                        - Experimental Site -
                    </p>
                    <p className="font-header text-lighten-800">
                        {props.data && Object.values(props.data)}
                    </p>
                </div>
            }
        </div>
    );
}
