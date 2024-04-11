import Navbar from "./Navbar";

export default function Frame(props) {
    return (
        <>
            {!props.noNavbar && <Navbar />}

            <div className="min-h-screen overflow-auto bg-slate-200">
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
