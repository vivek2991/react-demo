import { useState } from "react"
import Clock from "./Clock"

function App17() {

  const [color, setColor] = useState('red');

  return(
    <div>
      <h1>Digital Clocl in React JS</h1>
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value={"red"}>Red</option>
        <option value={"blue"}>Blue</option>
        <option value={"green"}>Green</option>
        <option value={"orange"}>Orange</option>
        <option value={"yellow"}>Yellow</option>
      </select>
      {/* pass color to the clock and use this value there */}
      <Clock color={color}/>

    </div>
  )
}

export default App17