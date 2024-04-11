export default function Button(props) {
    return (
        <button className="overflow-hidden rounded-xl transition-all">
            {props.children}
            <p className="mt-1 font-header text-xs text-green-200">
                {props.text}
            </p>
        </button>
    );
}
