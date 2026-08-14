import NavBar45 from "./NavBar-45"
import { Routes, Route, Link } from "react-router"
import Home44 from "./Home-44"
import About44 from "./About-44"
import Login44 from "./Login-44"

function App45() {
    return (
        <div>
            <h2>Header with React Router in React JS</h2>
            <NavBar45 />

            <Routes>
                <Route path="/" element={<Home44 />} />
                <Route path="/about" element={<About44 />} />
                <Route path="/login" element={<Login44 />} />
            </Routes>
        </div>
    )
}

export default App45