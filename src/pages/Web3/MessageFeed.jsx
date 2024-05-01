import { useRef, useEffect } from "react";

export default function MessageFeed(props) {
    const messages = props.messages;

    function AlwaysScrollToBottom() {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView(), [messages]);
        return <div ref={elementRef} />;
    }

    function createMessage(message, index) {
        return (
            <div
                key={index + message.from.id}
                className="justify-left flex-0 scrollbar-hide flex justify-between gap-2 overflow-y-auto overflow-x-scroll rounded-3xl bg-darken-50 px-4 py-2"
            >
                {message.from.nick && (
                    <p className="my-auto max-w-36 max-h-8 overflow-scroll scrollbar-hide text-left text-lg font-semibold text-darken-800 max-sm:text-sm">
                        {message.from.nick}:
                    </p>
                )}
                <p className="scrollbar-hide my-auto max-h-96 flex-1 overflow-scroll text-left text-lg text-darken-800 max-sm:text-sm">
                    {message.content}
                </p>
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

    return (
        <div className="flex flex-col gap-2">
            {messages[0] ? (
                messages.map(createMessage)
            ) : (
                <p className="italic text-darken-600">
                    Messages will apear here
                </p>
            )}
            <AlwaysScrollToBottom />
        </div>
    );
}
