export default function BigButton(props) {
    return (
        <button className="h-16 w-16 overflow-hidden rounded-full transition-all hover:border-2 hover:border-b-4 hover:border-green-400 hover:border-b-green-700 hover:bg-green-500">
            {props.children}
            <p className="mt-1 font-header text-xs text-green-200">
                {props.text}
            </p>
        </button>
    );
}
