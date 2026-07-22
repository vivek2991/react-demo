import { useRef } from "react"
function App27(){

    // create useRef for input field
    const inputRef = useRef(null);
    // use inputReft to get focus or perform different operations
    const inputHandler=()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color = 'red';
        inputRef.current.placeholder = 'Enter Password';
    }
    // hide and show input field 
    const toggleHandler=()=>{
        if(inputRef.current.style.display != 'none'){
            inputRef.current.style.display = 'none';
        }else{
            inputRef.current.style.display = 'inline';
        }
    }

    return(
        <div>
            <h2>useRef Hook in React JS</h2>
            {/* hide and show input field */}
            <button onClick={toggleHandler}>Toggle</button><br /><br />
            {/* assign inputReft to input field to get all the values */}
            <input ref={inputRef} type="text" placeholder="Enter user name"/><br /><br />
            <button onClick={inputHandler}>Focus on Input Field</button>
        </div>
    )

}

export default App27