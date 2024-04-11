export default function Panel(props) {
    return (
        <div className={props.className}>
            <div className="max-w-lg rounded-xl border-2 border-b-4 border-green-500 border-b-green-700 border-t-green-500 bg-green-600 p-4 shadow-xl sm:mt-16 sm:scale-150">
                {props.children}
            </div>
        </div>
    );
}
