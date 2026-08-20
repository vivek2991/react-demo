import { useEffect, useState } from "react";
import './App-52.css'

function UserList52() {

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])

    const getUserData = async () => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        //console.log(response);
        setUserData(response);
        setLoading(false);
    }

    return (
        <div>
            <ul className='user-list-51'>
                <li className="font-bold">Name</li>
                <li className="font-bold">Email</li>
                <li className="font-bold">Age</li>
            </ul>
            {
                !loading ?
                    userData.map((user) => (
                        <ul key={user.id} className='user-list-51'>
                            <li>{user.name}</li>
                            <li>{user.email}</li>
                            <li>{user.age}</li>
                        </ul>
                    ))
                    : <h2>Loading...</h2>
            }
        </div>
    );
}

export default UserList52;