export default function UsersList(props) {
    const users = props.users;

    return (
        <div>
            <p>Users: </p>
            <ul>
                {users[0]
                    ? users.map((user, index) => {
                          return <li key={index}>{user.id}</li>;
                      })
                    : "There are no users."}
            </ul>
        </div>
    );
}
