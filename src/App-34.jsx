import { useState } from "react"

function App34() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    const handleAddUsers=()=>{
        setUsers([...users,user]); 
    }

    // without using state we got the value so it called derived
    const total= users.length;
    const last = users[users.length-1];
    const unique = [...new Set(users)].length;

    return (
        <div>
            <h2>Derived State in React JS</h2>

            <h3>Total User: {total}</h3><br />
            <h3>Last User: {last}</h3><br />
            <h3>Total Unique User: {unique}</h3><br />

            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Add New User"/><br /><br />
            <button onClick={handleAddUsers}>Add User</button>
            {
                users.map((item,index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }

        </div>
    )
}

export default App34