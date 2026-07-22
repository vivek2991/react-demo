import AddUser35 from "./AddUser-35"
import DisplayUser35 from "./DisplayUsers-35"
import { useState } from "react"

function App35() {

    const [user, setUser] = useState('');
    return (
        <div>
            <h2>Lifting State Up in React JS</h2>
            <AddUser35 setUser={setUser}/>
            <DisplayUser35 user={user}/>
        </div>
    )
}

export default App35