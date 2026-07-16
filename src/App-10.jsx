import { useState } from "react"
import User10 from "./user-10"
import College from "./College"
import Student from "./student"


function App10() {

  //let userName = "Smriti";
  //let userage = 29;

  let userObject = {
    name: "Radhika",
    age:"29"
  }

  let userObject1 = {
    name: "Dipika",
    age:"35"
  }

  let collegeNames = ['IET', 'DU', 'IIT', 'IIM'];

  const [student, setStudent] = useState("Yukti");

  return <>
    <div>
      <h1>Props in React</h1>
      <br />
      {/* pass variable to user */}
      {/* <User10 name="Vivek Patel" age={35} /> */}
      {/* pass dynamic value to user component*/}
      {/* <User10 name={userName} age={userage} /> */}
      {/* pass object or array value to user component*/}
      <User10 user={userObject}/>
      <User10 user={userObject1}/>
      <College names={collegeNames} />

      {/* pass static value */}
      <Student name="Gulki"/>
      {/* pass state value */}
      <Student name={student} />
      {/* check if there is value then call or blank will not display */}
      { student && <Student name={student}  /> }

      <button onClick={()=>setStudent("Bhavika")}>Update Student Name</button>

    </div>
  </>
}

export default App10