// function User10(props){
    
//     return(
//         <div>
//             <h1>User Component</h1>
//             <h2>User Name: {props.name}</h2>
//             <h2>User Age: {props.age}</h2>
//         </div>
//     )
// }

function User10({ user }){
    console.log(user);
    
    return(
        <div>
            <h1>User Component</h1>
            <h2>User Name: {user.name}</h2>
            <h2>User Age: {user.age}</h2>
        </div>
    )
}

export default User10