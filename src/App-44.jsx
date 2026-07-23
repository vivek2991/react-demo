import { Routes, Route, Link } from "react-router"
import Home44 from "./Home-44"
import About44 from "./About-44"
import Login44 from "./Login-44"
import NavBar44 from "./NavBar-44"

function App44() {
    return (
        <>
            <h2>Basic Pages with React-Router - React JS</h2>
            
            <NavBar44 />
            
            <Routes>
                <Route path="/" element={<Home44 />} />
                <Route path="/about" element={<About44 />} />
                <Route path="/login" element={<Login44 />} />
            </Routes>
        </>
    )
}

export default App44