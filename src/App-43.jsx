import { BrowserRouter, Routes, Route, Link } from "react-router"

function App43() {
    return (
        <div>
            <h2>React Router 7 Setup in React JS</h2>
            <BrowserRouter>
                <Link to="/"><span style={{paddingRight:'20px'}}>Home</span></Link>
                <Link to="/about"><span style={{paddingRight:'20px'}}>About</span></Link>
                <Link to="/contact"><span style={{paddingRight:'20px'}}>Contact</span></Link>
                <Link to="/blog"><span style={{paddingRight:'20px'}}>Blog</span></Link>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/contact" element={<h1>Contact</h1>} />
                    <Route path="/Blog" element={<h1>Blog</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App43