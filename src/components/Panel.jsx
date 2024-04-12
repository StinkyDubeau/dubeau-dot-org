export default function Panel(props) {
    return (
        <div className={props.className}>
            <div className="max-w-lg rounded-xl border border-darken-500 border-b-darken-600 border-t-darken-500 bg-zinc-600 p-4 shadow-xl sm:mt-16">
                {props.children}
            </div>
        </div>
    );
}
