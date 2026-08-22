import { useState } from "react"

function App58(){

    const colors = JSON.parse(localStorage.getItem('color'));
    const [r, setR] = useState(colors && colors.r?colors.r:0);
    const [g, setG] = useState(colors && colors.g?colors.g:0);
    const [b, setB] = useState(colors && colors.b?colors.b:0);

    const save=()=>{
        localStorage.setItem("color", JSON.stringify({r,g,b}))
    }

    return(
        <div>
            <h2>Color Mixer in React JS</h2>

            <div style={{backgroundColor:'rgb('+r+','+g+','+b+')', height:200, width:200}}>

            </div>
            <br />
            <label htmlFor="">Red</label>
            <input type="range" value={r} min={0} max={255} onChange={(event)=>setR(event.target.value)}/>
            <br /><br />
            <label htmlFor="">Green</label>
            <input type="range" value={g} min={0} max={255} onChange={(event)=>setG(event.target.value)}/>
            <br /><br />
            <label htmlFor="">Blue</label>
            <input type="range" value={b} min={0} max={255} onChange={(event)=>setB(event.target.value)}/>
            <br /><br />
            <button onClick={save}>Save Color Combination</button>
        </div>
    )
}

export default App58