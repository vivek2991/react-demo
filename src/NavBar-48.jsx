import { NavLink, Outlet } from "react-router";
import './header-45.css'

export default function NavBar48() {
    return (
        <div>
            <div className="header">
                <div>
                    <NavLink className="link" to="/"><h2>Logo</h2></NavLink>
                </div>
                <div className="header">
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink className="link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/college">College</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/users">Users</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to="/users/list">List</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* to display data of the page home login about outlet used */}
            <Outlet />
        </div>
    )
}