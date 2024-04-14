export default function Panel(props) {
    return (
        <div className={props.className}>
            <div className="max-w-lg animate-gradient-x rounded-xl  bg-gradient-to-tl from-green-600 via-cyan-600 to-yellow-500 p-4 shadow-xl sm:mt-16">

                {props.children}

            </div>
        </div>
    );
}
