const User = ({data})=>{
    return(
        <div style={{textAlign:"left",padding:"20px",margin:"20px",width:"400px",border:"1px solid green",borderRadius:"10px"}}>
            <h3>ID: <span style={{color:'green'}}>{data.id}</span></h3>
            <h3>Name: <span style={{color:'green'}}>{data.name}</span></h3>
            <h3>age: <span style={{color:'green'}}>{data.age}</span></h3>
            <h3>Email: <span style={{color:'green'}}>{data.email}</span></h3>
            
        </div>
    )
}

export default User;