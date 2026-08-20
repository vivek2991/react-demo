import { useEffect, useState } from 'react'
import './App-50.css'

function App50() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getUserData();
    }, [1000])

    async function getUserData() {
        const url = "https://dummyjson.com/users";
        let response = await fetch(url);
        response = await response.json();
        //console.log(response);
        setUserData(response.users);
    }

    console.log(userData);

    return (
        <div>
            <h2 className="text-center bg-blue-500 text-white text-3xl font-bold p-10">API</h2>
            <ul className='user-list'>
                <li className="font-bold">First Name</li>
                <li className="font-bold">Last Name</li>
                <li className="font-bold">Age</li>
            </ul>
            {
                userData && userData.map((user) => {
                    return <ul key={user.id} className='user-list'>
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.age}</li>
                    </ul>
                })
            }
        </div>
    )
}

export default App50