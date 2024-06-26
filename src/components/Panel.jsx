export default function Panel(props) {
    return (
        <div className={props.className}>
            <div className="max-w-md animate-gradient-x rounded-3xl bg-white shadow-lg">
                {props.children}
            </div>
        </div>
    );
}
