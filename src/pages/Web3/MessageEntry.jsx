export default function MessageEntry(props) {
    const myMessage = props.myMessage;
    const setMyMessage = props.setMyMessage;
    const sendMyMessage = props.sendMyMessage;

    return (
        <form
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
    );
}
