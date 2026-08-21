import { useActionState } from 'react';
import './App-54.css'

function App54(){

    const handleLogin=(prevData, formData)=>{
        let name = formData.get('name')
        let password = formData.get('password')
        let regex = /^[A-Z0-9]+$/i;
        
        if(!name || name.length>5){
            return {error: 'Name can not be empty and Name should not container more than 5 characters', name, password}
        } else if(!regex.test(password)) {
            return {error: 'password can contain only numnbers and alphabets', name, password}
        } else {
            return {message: 'Login Successfully', name, password}
        }
    }
    
    const [data, action, pending] = useActionState(handleLogin);
    
    return(
        <div>
            <h1>Validation with useActionState in React JS</h1>
            {
                data?.message && <span style={{color:'green'}}>{data?.message}</span>
            }
            {
                data?.error && <span style={{color:'red'}}>{data?.error}</span>
            }
            <form action={action}>
                <input defaultValue={data?.name} type="text" name='name' placeholder='Enter User Name'/>
                <br /><br />
                <input defaultValue={data?.password} type="text" name='password' placeholder='Enter Password'/>
                <br /><br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default App54;