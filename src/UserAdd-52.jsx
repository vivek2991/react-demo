import { useState } from "react";

function UserAdd52() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const createUser = async () => {
        console.log(name, email, age);
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ name, email, age })
        });
        response = await response.json();
        if (response) {
            alert("User Added Successfully");
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="display-6 text-center">Add New User</h1>
            <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"/>
            <br /><br />
            <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"/>
            <br /><br />
            <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age"/>
            <br /><br />
            <button onClick={createUser}>Add User</button>
        </div>
    );
}

export default UserAdd52;