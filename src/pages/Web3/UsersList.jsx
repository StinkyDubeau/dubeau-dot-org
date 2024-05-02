export default function UsersList(props) {
    const users = props.users;
    const myUser = props.myUser;

    return (
        <div>
            <p className="text-darken-800 max-sm:text-sm">Users: </p>
            <div className="flex justify-center">
                <ul className="scrollbar-hide flex gap-1 overflow-auto max-sm:px-3 sm:max-w-52 sm:flex-wrap">
                    {myUser && (
                        <li className="max-w-52 flex-1 text-nowrap rounded-3xl bg-darken-50 px-2 py-1 text-darken-700 max-sm:max-h-6 max-sm:text-xs sm:w-52">
                            ⭐️ {myUser.nick ? myUser.nick : myUser.id}
                        </li>
                    )}
                    {users[0]
                        ? users.map((user, index) => {
                              return (
                                  <li
                                      className="text-nowrap flex-0 rounded-3xl bg-darken-50 px-2 py-1 text-darken-700 max-sm:max-h-6 max-sm:text-xs sm:w-52"
                                      key={index}
                                  >
                                      <p className="">
                                          {user.nick ? user.nick : user.id}
                                      </p>
                                  </li>
                              );
                          })
                        : <p className="text-darken-600 italic mx-auto">You are the only one here</p>}
                </ul>
            </div>
        </div>
    );
}
