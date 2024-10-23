export default function Panel(props) {
    return (
        <div
            className={`${props.className} max-w-md rounded-3xl bg-white shadow-lg`}
        >
            {props.children}
            {/* 𝐒wag */}
        </div>
    );
}
