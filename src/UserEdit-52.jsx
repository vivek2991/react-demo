import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserEdit52() {

    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getUserData();
    }, []);

    const url = "http://localhost:3000/users/"+id;

    const getUserData = async () => {
        let response = await fetch(url);
        response = await response.json();
        setName(response.name);
        setEmail(response.email);
        setAge(response.age);
    }
    
    const updateUserData = async () => {
        let response = await fetch(url, {
            method: "put",
            body: JSON.stringify({ name, email, age })
        });
        response = await response.json();
        if (response) {
            alert("User Updated Successfully");
            navigate("/list");
        }
    }

    return (
    <div>
        <h2>Edit User Page</h2>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"/>
            <br /><br />
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"/>
            <br /><br />
            <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age"/>
            <br /><br />
            <button onClick={updateUserData}>Update User</button>
    </div>
)}

export default UserEdit52;