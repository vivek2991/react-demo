import Student from "./student-18";

const College=({college})=>{
    
    return(
        <div style={{
            textAlign:"left",
            backgroundColor:"#ccc", 
            padding:"20px", 
            borderBottom:"2px solid #000", 
            margin:"10px", 
            borderRadius:"10px"
            }}>
            <h2>Name: {college.name}</h2>
            <ul>
              <li>
                <h2>City: {college.city}</h2>
              </li>
              <li>
                <h2>Website: {college.website}</h2>
              </li>
              <li>
                {/* call student component and pass student object in parameters called props in react */}
                <Student student={college.student} />
              </li>
            </ul>
          </div>
    )
}

export default College