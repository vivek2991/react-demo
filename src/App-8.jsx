import { useState } from "react"
import User from "./user"

function App8() {

  const [display, SetDisplay] = useState(true)

  return <>
    <div>
      <h1>Toggle or Hide and Show in React</h1>
      <br /><br />
      { display? <h2>Vivek Patel</h2>: <h2>No User Name</h2>}
      <button onClick={()=>SetDisplay(!display)}>Toggle</button>
      <br /><br />

      { display? <User />:null }
    
    
    
    </div>

    
  </>
}

export default App8