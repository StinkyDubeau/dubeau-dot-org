export default function Panel(props) {
    return (
        <div
            className={`${props.className} max-w-md rounded-3xl bg-lighten-900 shadow-lg`}
        >
            {props.children}
            {/* 𝐒wag */}
        </div>
    );
}
