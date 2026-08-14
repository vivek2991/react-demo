import { useParams } from "react-router"

export default function UserDetail() {

    const params = useParams();

    return (
        <div>
            <h2>User Details</h2>
            <p>This is the user details page.</p>

            <h4>User ID: {params.id}</h4>
        </div>
    )
}