import { NavLink, Route, Routes } from "react-router";
import UserAdd52 from "./UserAdd-52";
import UserList52 from "./UserList-52";
import { Navbar } from "react-bootstrap";
import UserEdit52 from "./UserEdit-52";

function App52(){
    return(
        <div>
            <h1 className="display-6 text-center">Routes for User List and Add User UI</h1>
            {/* <UserList52 /> */}

            <ul className="nav-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/list">List</NavLink>
                </li>
                <li>
                    <NavLink to="/add">Add User</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/list" element={<UserList52 />} />
                <Route path="/add" element={<UserAdd52 />} />
                <Route path="/edit/:id" element={<UserEdit52 />} />
            </Routes>
        </div>
    )
}

export default App52;