export default function UsersList(props) {
    const users = props.users;

    return (
        <div>
            <p className="text-darken-800 font-header">Users: </p>
            <ul className="flex sm:flex-wrap justify-center gap-1">
                {users[0]
                    ? users.map((user, index) => {
                          return (
                              <li
                                  className="rounded-3xl text-darken-700 max-sm:text-xs bg-darken-50 px-2 py-1 w-52"
                                  key={index}
                              >
                                  {user.id}
                              </li>
                          );
                      })
                    : "There are no users."}
            </ul>
        </div>
    );
}
