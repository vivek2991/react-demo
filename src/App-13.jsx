import { useState } from "react";
import Skills from "./Skills";

function App13(){
  
  const [skills, SetSkills] = useState([]);
  const handleSkills=(event)=>{
    console.log(event.target.value, event.target.checked)
    if(event.target.checked){
      // this ...skills called filter function
      SetSkills([...skills, event.target.value]);
    }else{
      SetSkills([...skills.filter((item)=>item!=event.target.value)]);
    }
  }

  return <>
    <div>
      <h1>Handle Checkbox in React</h1>
      <Skills />
      <input onChange={handleSkills} type="checkbox" id="php" value="php"/>
      <label htmlFor="php">PHP</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="js" value="js"/>
      <label htmlFor="js">JS</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="node" value="node"/>
      <label htmlFor="node">Node</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="java" value="java"/>
      <label htmlFor="java">JAVA</label>
      <br /><br />

      <h1>{skills.toString()}</h1>

    </div>
  </>

}

export default App13;