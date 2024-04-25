export default function Button(props) {
    return (
        <button className="overflow-hidden rounded-xl bg-lighten-400 px-2 transition-all hover:px-4">
            {props.children}
        </button>
    );
}
