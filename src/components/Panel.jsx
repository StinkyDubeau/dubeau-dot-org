export default function Panel(props) {
    return (
        <div className={props.className}>
            <div className="max-w-md animate-gradient-x rounded-3xl bg-white">
                {props.children}
                {/* 𝐒wag */}
            </div>
        </div>
    );
}
