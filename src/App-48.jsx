import NavBar48 from "./NavBar-48"
import { Routes, Route, Link, Navigate } from "react-router"
import Home44 from "./Home-44"
import About44 from "./About-44"
import Login44 from "./Login-44"
import PageNotFound46 from "./PageNotFound-46"
import College47 from "./College-47"
import Student47 from "./Student-47"
import Department47 from "./Department-47"
import Detail47 from "./Details-47"
import UserList from "./User-48"
import UserDetail from "./UserDetails-48"

function App48() {
    return (
        <div>
            <h2>Layout and Index Routes | Route Prefix | Dynamic routes | React Router Optional Segment | React Router NavLink and Active Class</h2>
            {/* <NavBar48 /> */}

            {/* Hide navbar for the college page */}
            <Routes>

                <Route element={<NavBar48 />}>
                    <Route path="/" element={<Home44 />} />
                    <Route path="/about" element={<About44 />} />
                    <Route path="/login" element={<Login44 />} />
                    {/* <Route path="/users" element={<UserList />} /> */}
                    {/* list in url is optional if not added /user url open the same user page  */}
                    <Route path="/users/list?" element={<UserList />} />
                    {/* <Route path="/users/:id" element={<UserDetail />} /> */}
                    <Route path="/users/:id/:name?" element={<UserDetail />} />
                </Route>

                {/* College Prefix before all 3 urls this way we can set prefix */}
                <Route path="/college" element={<College47 />} >
                    <Route path="student" element={<Student47 />} />
                    <Route path="department" element={<Department47 />} />
                    <Route path="detail" element={<Detail47 />} />
                </Route>

                {/* testing - http://localhost:5173/login1 */}
                {/* <Route path="/*" element={<PageNotFound46 />} /> */}

                {/* Auto redirect to home page if 404*/}
                {/* <Route path="/*" element={<Navigate to="/" />} /> */}

            </Routes>
        </div>
    )
}

export default App48