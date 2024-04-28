export default function UserProfile(props) {
    const user = props.user;

    return (
        <div>
            <p>My ID: {user ? user.id : "You have no identity."}</p>
            <p>My Karma: {user ? user.karma : "You have no karma."}</p>
        </div>
    );
}
