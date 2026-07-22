import { useFormStatus } from "react-dom";

function App31(){
    
    const handleSubmit=async () => {
        await new Promise(res=>setTimeout(res,2000));
        console.log("Submit");
        
    }

    function CustomerForm(){
        const {pending} = useFormStatus();
        console.log(pending);
        

        return(
            <div>
                <br />
                <input type="text" placeholder="Enter Name"/>
                <br /> <br />
                <input type="password" placeholder="Enter Password"/>
                <br /> <br />
                <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
            </div>
        )
    }

    return(
        <div>
            <h2>useFormStatus Hook in React JS</h2>
            <form action={handleSubmit}>
            <CustomerForm />     
            </form>
        </div>
    )
}

export default App31