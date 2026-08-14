import NavBar45 from "./NavBar-45"
import { Routes, Route, Link, Navigate } from "react-router"
import Home44 from "./Home-44"
import About44 from "./About-44"
import Login44 from "./Login-44"
import PageNotFound46 from "./PageNotFound-46"

function App46() {
    return (
        <div>
            <h2>404 Page and Redirection in React JS</h2>
            <NavBar45 />

            <Routes>
                <Route path="/" element={<Home44 />} />
                <Route path="/about" element={<About44 />} />
                <Route path="/login" element={<Login44 />} />

                {/* testing - http://localhost:5173/login1 */}
                {/* <Route path="/*" element={<PageNotFound46 />} /> */}

                {/* Auto redirect to home page if 404*/}
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default App46