import { useRef, useEffect } from "react";

import createMessage from "./Message";

export default function MessageFeed(props) {
    const messages = props.messages;

    function AlwaysScrollToBottom() {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView(), [messages]);
        return <div ref={elementRef} />;
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
