function AddUser35({setUser}) {

    
    return (
        <div>
            <h2>Add User</h2>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter User Name"/>
            <hr />
        </div>
    )
}

export default AddUser35