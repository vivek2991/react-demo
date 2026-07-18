import { useState } from "react";

function App11(){

  const [val, setVal] = useState("Vivek Patel");

  return <>
    <div style={{color:"green", border:"1px solid green", padding:"30px"}}>
      <h1>Get input field value</h1>
      <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter User Name"/>
      <h3>{val}</h3>

      <button onClick={()=>setVal("")}>Clear value</button>
    
    </div>
  </>

}

export default App11;