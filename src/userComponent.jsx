function Login(){
    return <>
        <div>
            <h1>User Login</h1>
        </div>
    </>
}

// Default export with function because only one can be as default which Login is already 
// It called named export
export function Profile(){
    return(
        <div>
            <h1>Profile</h1>
        </div>
    )
}

// It called named export
export function Setting(){
    return(
        <div>
            <h1>Setting</h1>
        </div>
    )
}

// We can export varibale as well like below
export const UserKey="Hell54#$!#$";

// You can export default only one if you wan to another function like Profile mentioned named export as above
export default Login