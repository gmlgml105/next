import type { User } from "./UserContainer";

interface userProps {
    user: User
}

export default function User({user}: userProps) {
    const {name} = user;

    return (
        <li>
        <p>이름: {name}</p>
        </li>
    );
}


