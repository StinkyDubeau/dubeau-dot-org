import Avatar from "./Avatar";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import { useState } from "react";

// This was re factored today. It used to be inside of the MessageFeed.jsx component.
// If something is broken, this should be your first point of investigation
// Sincerely,
// Jake 2024

export default function createMessage(message, index) {
    // const [showDetail, setShowDetails] = useState(false);

    // function Profile() {
    //     return (
    //         <motion.div
    //             initial={{ scale: 0.5, opacity: 0 }}
    //             animate={{ scale: 1, opacity: 1 }}
    //             className="absolute z-40 bg-lighten-800"
    //         >
    //             <p>{message.from.nick}</p>
    //             <p>{message.from.id}</p>
    //         </motion.div>
    //     );
    // }
    // TODO: Show profile details when you tap on a user's nick
    //       The above code was my start to that

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={index + message.from.id}
            className="justify-left flex-0 flex justify-between gap-2 overflow-y-auto overflow-x-scroll rounded-3xl bg-darken-50 px-4 py-2 scrollbar-hide"
        >
            {message.from.nick && (
                <div className="mt-0.5 flex max-h-8">
                    <div className="flex flex-col justify-center overflow-hidden">
                        <Avatar nick={message.from.nick} />
                    </div>

                    <p className="my-auto max-w-36 overflow-scroll text-ellipsis whitespace-nowrap text-nowrap text-left text-lg font-semibold text-darken-800 scrollbar-hide max-xl:hidden max-sm:text-sm">
                        {/* Only shows on XL screens */}
                        {message.from.nick}
                    </p>
                </div>
            )}

            <div className="my-auto max-h-96 flex-1 overflow-x-scroll text-left text-lg text-darken-800 scrollbar-hide max-sm:text-sm">
                <div className="flex gap-1 max-sm:text-sm xl:hidden">
                    {/* Only shows on SM-LG screens */}
                    <p className="text-darken-800">{message.from.nick} </p>
                    <p className="text-darken-400">
                        at {message.timestamp.toLocaleString()}
                    </p>
                </div>
                <Markdown className="text-wrap">{message.content}</Markdown>
            </div>
            {/* User ID and Time are hidden on small displays */}
            <div className="flex-0 flex h-full flex-col justify-center hover:visible max-xl:hidden">
                <p className="text-sm text-darken-500">
                    {message.timestamp.toLocaleString()}
                </p>
                <p className="text-xs text-darken-500">{message.from.id}</p>
            </div>
        </motion.div>
    );
}
