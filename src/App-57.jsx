import React, { Suspense, use } from "react";

const fetchData = () => fetch('https://dummyjson.com/users').then((response) => response.json());

const userResource = fetchData();

function App57() {
    return (
        <div>
            <h2>'use' API (Different from REST) in React JS</h2>
            <Suspense fallback={<p>Loading...</p>}>
                <Users userResource={userResource} />
            </Suspense>
        </div>
    )
}

const Users = ({ userResource }) => {

    const userData = use(userResource);
    console.log(userData.users);

    return (
        <div>
            <h1>Users List</h1>
            {
                userData?.users?.map((user)=>(
                    <h1 key={user.id}>{user.firstName}</h1>
                ))
            }
        </div>
    )
}

export default App57