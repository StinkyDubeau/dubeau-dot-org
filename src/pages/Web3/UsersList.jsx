export default function UsersList(props) {
    const users = props.users;

    return (
        <div>
            <p>Users: </p>
            <ul className="flex flex-wrap justify-center gap-1">
                {users[0]
                    ? users.map((user, index) => {
                          return (
                              <li
                                  className="rounded-3xl bg-darken-50 px-2 py-1 w-52"
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
