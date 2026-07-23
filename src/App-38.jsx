import { useActionState } from "react"

function App38() {

    const handleSubmit = async (previousData, formData) => {
        let name = formData.get('name');
        let password = formData.get('password');
        await new Promise(res => setTimeout(res, 2000));
        //console.log("Handle Submit Called", name, password);
        if (name && password) {
            return { message: 'Data Submitted',name,password }
        } else {
            return { error: 'Failed to Submit. Enter Proper Data',name,password }
        }

    }

    const [data, action, pending] = useActionState(handleSubmit, undefined)
    //console.log(data);

    return (
        <div>
            <h2>useActionState Hook in React JS</h2>
            <form action={action}>
                <input defaultValue={data?.name} type="text" name="name" placeholder="Enter Name" />
                <br /><br />
                <input defaultValue={data?.password} type="password" name="password" placeholder="Enter Password" />
                <br /><br />
                <button disabled={pending} >Submit</button>
                <br />
            </form>
            {
                data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
            }
            {
                data?.message && <span style={{ color: "green" }}>{data?.message}</span>
            }

            <h3>Name: {data?.name}</h3>
            <h3>Password: {data?.password}</h3>
        </div>
    )
}

export default App38