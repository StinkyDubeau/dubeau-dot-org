export default function createMessage(message, index) {
    // This was re factored today. It used to be inside of the MessageFeed.jsx component.
    // If something is broken, this should be your first point of investigation
    // Sincerely,
    // Jake 2024

    return (
        <div
            key={index + message.from.id}
            className="justify-left flex-0 flex justify-between gap-2 overflow-y-auto overflow-x-scroll rounded-3xl bg-darken-50 px-4 py-2 scrollbar-hide"
        >
            {message.from.nick && (
                <div className="my-auto flex max-h-8">
                    <div className="flex flex-col justify-center overflow-hidden">
                        <Avatar nick={message.from.nick} />
                    </div>

                    <p className="my-auto max-w-36 overflow-scroll text-ellipsis whitespace-nowrap text-nowrap text-left text-lg font-semibold text-darken-800 scrollbar-hide max-sm:text-sm">
                        {message.from.nick}:
                    </p>
                </div>
            )}
            <div className="my-auto max-h-96 flex-1 overflow-scroll text-left text-lg text-darken-800 scrollbar-hide max-sm:text-sm">
                <Markdown>{message.content}</Markdown>
            </div>
            {/* User ID and Time are hidden on small displays */}
            <div className="flex-0 flex h-full flex-col justify-center max-sm:hidden">
                <p className="text-sm text-darken-500">
                    {message.timestamp.toLocaleString()}
                </p>
                <p className="text-xs text-darken-500">{message.from.id}</p>
            </div>
        </div>
    );
}