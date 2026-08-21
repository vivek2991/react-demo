import { useReducer } from "react"

const emptyData = {
        name: '',
        password: '',
        email: '',
        city: '',
        address: ''
    }

const reducer=(data, action)=>{
    return {...data, [action.type]:action.val}
}    

function App55(){

    const [state, dispatch] = useReducer(reducer, emptyData)
    //console.log(state);
    
    return(
        <div>
            <h1>useReducer Hook in React JS</h1>
            {/* <form> */}
                <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'name'})} placeholder="Enter Name"/>
                <br /><br />
                <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'password'})} placeholder="Enter password"/>
                <br /><br />
                <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'email'})} placeholder="Enter Email"/>
                <br /><br />
                <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'city'})} placeholder="Enter City"/>
                <br /><br />
                <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'address'})} placeholder="Enter Address"/>
                <br /><br />
                <button onClick={()=>console.log(state)}>Sign Up</button>
            {/* </form> */}
            <ul>
                <li>Name: {state.name}</li>
                <li>password: {state.password}</li>
                <li>Email: {state.email}</li>
                <li>City: {state.city}</li>
                <li>Address: {state.address}</li>
            </ul>
        </div>
    )
}

export default App55