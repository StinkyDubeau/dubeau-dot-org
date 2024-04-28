export default function UsersList(props) {
    const users = props.users;
    const myUser = props.myUser;

    return (
        <div>
            <p className="text-darken-800 max-sm:text-sm">Users: </p>
            <div className="flex justify-center">
                <ul className="flex max-w-52 gap-1 overflow-auto sm:flex-wrap">
                    {myUser && (
                        <li className="w-52 rounded-3xl bg-darken-50 px-2 py-1 text-darken-700 max-sm:text-xs">⭐️{myUser.id}</li>
                    )}
                    {users[0]
                        ? users.map((user, index) => {
                              return (
                                  <li
                                      className="w-52 rounded-3xl bg-darken-50 px-2 py-1 text-darken-700 max-sm:text-xs"
                                      key={index}
                                  >
                                      {user.id}
                                  </li>
                              );
                          })
                        : "There are no users."}
                </ul>
            </div>
        </div>
    );
}
