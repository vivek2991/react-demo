import { Link } from "react-router";

export default function NavBar44(){
    return(
        <div>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/about"><h3>About</h3></Link>
            <Link to="/login"><h3>Login</h3></Link>
        </div>
    )
}