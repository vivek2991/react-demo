import { useState } from "react";
import Counter from "./counter";

function App7() {

  const [fruit, setFruit] = useState("Apple");

  const handleFruit=()=>{
    setFruit("Banana");
  }

  return <>
    <div>
      <h1>State in React JS</h1>
      <h2>{fruit}</h2>
      <h3><Counter /></h3>
      <button onClick={handleFruit}>Change Fruit Name</button>
    </div>
  </>
}

export default App7