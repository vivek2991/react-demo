import { useState } from "react"

function App9() {

  const [count, SetCount] = useState(0)

  return <>
    <div>
      <h1>Multiple Condition in React</h1>
      <br />
      <h2>{count}</h2><br /><br />
      <button onClick={()=>SetCount(count + 1)}>Counter</button><br /><br />
      {
        count==0?<h2>Condition 0</h2>
        :count==1?<h2>Condition 1</h2>
        :count==2?<h2>Condition 2</h2>
        :count==3?<h2>Condition 3</h2>
        :count==4?<h2>Condition 4</h2>
        :<h2>Other Condition</h2>
      }

    </div>

    
  </>
}

export default App9