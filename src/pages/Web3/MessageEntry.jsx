import Markdown from "react-markdown";

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
                    }}
                >
                    <input
                        className="lit-input h-full w-12 rounded-full p-2 text-center text-[5pt] shadow-inner transition-all focus:w-36 focus:text-base"
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
                    myMessage && sendMyMessage(myMessage);
                }}
            >
                <div className="flex gap-2">
                    <input
                        className="lit-input w-full rounded-full p-2 shadow-inner"
                        value={myMessage}
                        placeholder="Message"
                        onChange={(e) => setMyMessage(e.target.value)}
                    />
                    <button
                        className="lit-control w-24 rounded-full text-darken-800 max-sm:hidden"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}
