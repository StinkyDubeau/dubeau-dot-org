import { motion } from "framer-motion";

export default function UsersList(props) {
    const users = props.users;
    const myUser = props.myUser;
    const roomID = props.roomID;

    return (
        <div className="flex flex-col sm:gap-2">
            <p className="m-auto max-h-6 max-w-24 overflow-hidden text-darken-800 max-sm:text-sm">
                Room <span className="font-header">#{roomID}</span>
            </p>
            <div className="flex justify-center">
                <ul className="flex gap-1 overflow-auto scrollbar-hide max-sm:px-3 sm:max-w-52 sm:flex-wrap">
                    {myUser && (
                        <li className="min-w-12 max-w-52 flex-1 overflow-scroll text-ellipsis whitespace-nowrap text-nowrap rounded-3xl bg-darken-50 px-2 py-1 text-darken-700 scrollbar-hide max-sm:max-h-6 max-sm:text-xs sm:w-52">
                            ⭐️ {myUser.nick ? myUser.nick : myUser.id}
                        </li>
                    )}
                    {users[0] ? (
                        users.map((user, index) => {
                            return (
                                <motion.li
                                    initial={{
                                        scale: 0.5,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    className="flex-0 whitespace-nowrap text-nowrap rounded-3xl bg-darken-50 px-2 py-1 text-darken-700 max-sm:max-h-6 max-sm:text-xs sm:w-52"
                                    key={index}
                                >
                                    <p className="">
                                        {user.nick ? user.nick : user.id}
                                    </p>
                                </motion.li>
                            );
                        })
                    ) : (
                        <div className="flex gap-2 sm:flex-col">
                            <p className="mx-auto text-nowrap italic text-darken-600">
                                Looking for others...
                            </p>
                            <progress className="progress my-auto border-lighten-800 bg-darken-400 fill-lighten-800 text-lighten-800"></progress>
                            <p className="mx-auto italic text-darken-600 max-sm:hidden sm:visible">
                                You cannot connect to peers on the same network
                                as yourself.
                            </p>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}
