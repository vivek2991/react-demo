import { useState } from "react"
import './App-53.css'

function App53() {

    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState();

    const [password, setPassword] = useState('');
    const [passErr, setPassErr] = useState();

    const handleName=(event)=>{
        console.log(event.target.value);
        if(event.target.value.length>5) {
            setNameErr('Please Enter Valid Username. Only 5 Characters allowed.');
        } else{
            setNameErr('');
        }
    }

    const handlePassword=(event)=>{
        let regex = /^[A-Z0-9]+$/i;
        if(regex.test(event.target.value)) {
            setPassErr('');
        } else{
            setPassErr('Please Enter Valid Password. Only numbers and alphabets are allowed.');
        }
    }

    return (
        <div>
            <h1>Simple Validation in React JS</h1>
                    <input onChange={(handleName)} className={nameErr?'error':''} type="text" placeholder="Enter your name"/>
                    <span className="red-color">{nameErr && nameErr}</span>
                    <br /><br />
                    <input onChange={handlePassword} className={passErr?'error':''} type="text" placeholder="Enter your password"/>
                    <span className="red-color">{passErr && passErr}</span>
                    <br /><br />
                    <button disabled={passErr || nameErr} type="button" class="btn btn-primary ">Login</button>
        </div>
    )
}

export default App53