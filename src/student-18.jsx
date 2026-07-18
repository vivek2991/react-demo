const Student=({student})=>{
    return(
        <div>
            <h2>Students</h2>
                {
                    student.map((student)=>(
                        <ul style={{border:"1px solid black",margin:"10px",padding:"30px"}}>
                            <li>Name: {student.name}</li>
                            <li>Age: {student.age}</li>
                            <li>Email: {student.email}</li>
                        </ul>
                    ))
                }
        </div>
    )
}

export default Student