import { Link } from "react-router";

export default function PageNotFound46() {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2>Page Not Found</h2>
            <div>
                <Link to="/">Go to Home Page</Link>
            </div>
            <img style={{ width: "300px", height: "auto" }} src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png" alt="404 Error" />
        </div>
    )
}