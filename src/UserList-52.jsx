import { useEffect, useState } from "react";
import './App-52.css'

function UserList52() {

    const url = "http://localhost:3000/users";
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await fetch(url);
        response = await response.json();
        //console.log(response);
        setUserData(response);
        setLoading(false);
    }

    const deleteUser = async (id) => {
        let response = await fetch (url+"/"+id, {
            method: "delete"
        });
        response = await response.json();
        if (response) {
            alert("User Deleted Successfully");
            getUserData();
        }
        
    }

    return (
        <div>
            <ul className='user-list-51'>
                <li className="font-bold">Name</li>
                <li className="font-bold">Email</li>
                <li className="font-bold">Age</li>
                <li className="font-bold">Actions</li>
            </ul>
            {
                !loading ?
                    userData.map((user) => (
                        <ul key={user.id} className='user-list-51'>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                            <li>{user.age}</li>
                            <li>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </li>
                        </ul>
                    ))
                    : <h2>Loading...</h2>
            }
        </div>
    );
}

export default UserList52;