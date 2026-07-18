import { useState } from "react";

function App14(){

  const [gender, SetGender] = useState('female');
  const [city, SetCity] = useState('ahmedabad');

  return <>
    <div>
      <h1>Handle Radio and Dropdown in React</h1>
      
      <h4>Select Gener</h4>
      <input type="radio" onChange={(event)=>SetGender(event.target.value)} name="gender" id="male" value={"male"}/>
      <label htmlFor="male">Male</label>
      <input type="radio" onChange={(event)=>SetGender(event.target.value)} name="gender" id="female" value={"female"} checked={gender=='female'}/>
      <label htmlFor="female">Female</label>
      <br /><br />

      <h3>Gender: {gender}</h3> 
      <select onChange={(event)=>SetCity(event.target.value)} defaultValue={"ahmedabad"}>
        <option value="bhavnagar">Bhavnagar</option>
        <option value="ahmedabad">Ahmedabad</option>
        <option value="surat">Surat</option>
      </select>
      <br /><br />
      <h2>Selected City: {city}</h2>

    </div>
  </>

}

export default App14;