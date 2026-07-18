import { useState } from "react";

function App12(){

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return <>
    <div>
      <h1>Controlled Component in React</h1>

      {/* without form it will work all input field work without form */}
      <form action="" method="get"></form>

      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"/>
      <br /><br />
      <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password"/>
      <br /><br />
      <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"/>
      <br /><br />
      <button onClick={()=>setVal("")}>Submit</button><br /><br />
      <button onClick={()=>{setEmail('');setName('');setPassword('');}}>Clear</button>

      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    
    </div>
  </>

}

export default App12;