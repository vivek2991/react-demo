import { useState, useTransition } from "react"

// This is using useState
// function App32(){

//     const [pending, setPending] = useState(false);

//     const handleButton=async()=>{
//         setPending(true);
//         await new Promise(res=>setTimeout(res,2000));
//         setPending(false);
//     }

//     return(
//         <div>
//             <h2>useTransition Hook in React JS</h2>
//             <button disabled={pending} onClick={handleButton}>Click</button>
//         </div>
//     )
// }

// export default App32

// This is using useTransition
function App32() {

    const [pending, startTransition] = useTransition();

    const handleButton = () => {
        startTransition(async () => {
            await new Promise(res => setTimeout(res, 2000));
        })
    }

    return (
        <div>
            <h2>useTransition Hook in React JS</h2>
            {
                pending?
                <img width={"50px"} src="https://media.tenor.com/tga0EoNOH-8AAAAM/loading-load.gif" alt="" />
                :null
            }
            <button disabled={pending} onClick={handleButton}>Click</button>
        </div>
    )
}

export default App32