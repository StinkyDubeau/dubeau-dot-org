import Navbar from "./Navbar";

export default function Frame(props) {
    return (
        <>
            {!props.noNavbar && <Navbar data={props.data} />}

            <div className={`min-h-[130vh] h-max ${props.vignette === !null ? "shadow-inner-4xl bg-zinc-800" : "bg-zinc-200"}`}>
                <div className="m-auto max-w-screen-xl p-4">
                    <div className="mt-12 flex justify-center">
                        <div className="flex h-screen flex-col">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
