import NavBar45 from "./NavBar-47"
import { Routes, Route, Link, Navigate } from "react-router"
import Home44 from "./Home-44"
import About44 from "./About-44"
import Login44 from "./Login-44"
import PageNotFound46 from "./PageNotFound-46"
import College47 from "./College-47"
import Student47 from "./Student-47"
import Department47 from "./Department-47"
import Detail47 from "./Details-47"

function App47() {
    return (
        <div>
            <h2>404 Page and Redirection in React JS</h2>
            <NavBar45 />

            <Routes>
                <Route path="/" element={<Home44 />} />
                <Route path="/about" element={<About44 />} />
                <Route path="/login" element={<Login44 />} />
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

export default App47