export default function Button(props) {
    return (
        <button className="bg-lighten-400 overflow-hidden rounded-xl px-2 transition-all hover:px-4">
            {props.children}
        </button>
    );
}
