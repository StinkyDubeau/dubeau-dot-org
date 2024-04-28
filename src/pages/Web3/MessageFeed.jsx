export default function MessageFeed(props) {
    const messages = props.messages;

    function createMessage(message, index) {
        return (
            <div
                key={index + message.from.id}
                className="justify-left flex gap-2 overflow-y-auto overflow-x-scroll rounded-3xl bg-darken-50 px-4 py-2"
            >
                {/* User ID and Time are hidden on small displays */}
                <div className="flex h-full flex-col justify-center max-sm:hidden">
                    <p className="text-sm text-darken-500">
                        {message.timestamp.toLocaleString()}
                    </p>
                    <p className="text-sm text-darken-500">{message.from.id}</p>
                </div>
                <p className="my-auto text-left text-lg max-h-96 overflow-scroll text-darken-800 max-sm:text-sm">
                    {message.content}
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {messages[0] ? (
                messages.map(createMessage)
            ) : (
                <p className="italic text-darken-600">
                    Messages will apear here
                </p>
            )}
        </div>
    );
}
