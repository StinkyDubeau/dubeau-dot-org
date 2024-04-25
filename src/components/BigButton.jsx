export default function BigButton(props) {
    return (
        <button className="hover:border-lighten-00 h-24 w-24 overflow-hidden rounded-full transition-all hover:bg-darken-200">
            {props.children}
            <p className="mt-1 font-header text-lg text-lighten-600">
                {props.text}
            </p>
        </button>
    );
}
