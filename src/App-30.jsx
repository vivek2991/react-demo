import { useRef } from "react"
import UserInput from "./UserInput-30";

function App30(){

    const inputRef = useRef(null);
    
    const updateInput=()=>{
        console.log(inputRef);
        inputRef.current.value=1000;
        inputRef.current.focus();
        inputRef.current.style.color = 'red';
        
    }
    
    return(
        <div>
            <h2>ForwardRef in React JS</h2>
            <UserInput ref={inputRef}/>
            <button onClick={updateInput}>Update Input Field </button>
        </div>
    )
}

export default App30