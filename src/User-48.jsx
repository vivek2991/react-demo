import { Link } from "react-router"

export default function UserList() {

    const userData = [
        { id: 1, name: "John Doe"},
        { id: 2, name: "Jane Smith"},
        { id: 3, name: "Alice Johnson"},
        { id: 4, name: "Bob Brown"},
        { id: 5, name: "Charlie Davis"}
    ]

    return (
        <div>
            <h2>User List</h2>
            <p>This is the user list page.</p>
            {
                userData.map((item) => (
                    <div key={item.id}>
                        <p><Link to={`/users/${item.id}`}>{item.name}</Link></p>
                    </div>
                ))
            }
            <br />
            <h2>User List with name in URL</h2>
            {
                userData.map((item) => (
                    <div key={item.id}>
                        <p><Link to={`/users/${item.id}/${item.name}`}>{item.name}</Link></p>
                    </div>
                ))
            }
        </div>
    )
}