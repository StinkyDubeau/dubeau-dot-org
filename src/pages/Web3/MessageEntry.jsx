export default function MessageEntry(props) {
    const myMessage = props.myMessage;
    const setMyMessage = props.setMyMessage;
    const sendMyMessage = props.sendMyMessage;
    const sendMyUserUpdate = props.sendMyUserUpdate;
    const myUser = props.myUser;
    const setMyUser = props.setMyUser;

    return (
        <div className="flex gap-2">
            {myUser && (
                <form
                    className="flex-0"
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendMyMessage(myMessage);
                    }}
                >
                    <input
                        className="rounded-full w-12 h-full text-center focus:w-36 focus:text-base text-[5pt] transition-all bg-darken-50 p-2 text-darken-800 shadow-inner"
                        value={myUser.nick}
                        placeholder="Nickname"
                        onChange={(e) =>
                            sendMyUserUpdate({
                                ...myUser,
                                nick: e.target.value,
                            })
                        }
                    />
                </form>
            )}
            <form
                className="flex-1"
                onSubmit={(e) => {
                    e.preventDefault();
                    sendMyMessage(myMessage);
                }}
            >
                <div className="flex gap-2">
                    <input
                        className="w-full rounded-full bg-darken-50 p-2 text-darken-800 shadow-inner"
                        value={myMessage}
                        placeholder="Message"
                        onChange={(e) => setMyMessage(e.target.value)}
                    />
                    <button
                        className="w-24 rounded-full bg-darken-50 text-darken-800 transition-all hover:bg-darken-100"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
