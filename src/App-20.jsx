import { useState } from "react"
import Counter from "./counter-20"

function App20(){

    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    const [display, setDisplay] = useState(true);

    return(
        <div>
            <h1 style={{lineHeight:"1.1"}}>Handle Props Side Effect with useEffect in Component - React JS</h1>
            {
                display ? <Counter count={count} data={data}></Counter>:null
            }            
            {/* <Counter count={count} data={data}/> */}
            <button onClick={()=>setCount(count + 1)}>Counter {count}</button><br /><br />
            <button onClick={()=>setData(data + 1)}>Data {data}</button>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
        </div>
    )

}

export default App20