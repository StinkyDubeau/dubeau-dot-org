export default function Frame(props) {
    return (
        <>
            <div className="min-h-screen bg-zinc-800">
                <div className="m-auto max-w-screen-xl p-4">
                    {" "}
                    <div className="-mt-24 flex justify-center">
                        <div className="flex h-screen flex-col justify-center">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
