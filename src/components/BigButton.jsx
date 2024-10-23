export default function BigButton(props) {
    return (
        <button className="">
            {props.children}
            <p className="font-header text-lg text-lighten-800">
                {props.text}
            </p>
        </button>
    );
}
