import { useId } from "react"

function App39() {

    return (
        <div>
            <h2>useID Hook in React JS</h2>

            <UserForm />
            <hr />
            <UserForm />
            <hr />
            <UserForm />
        </div>
    )
}

export default App39

function UserForm() {

    //for a single id used everywhere like prefix
    // This way you can use just single useId with everyfield to make it unique
    const user = useId();
    //htmlFor={user+"name"} id={user+"name"}
    // <label htmlFor={user+"name"}>Enter User Name: </label>
    // <input id={name} type="text" placeholder="enter name"/>
    // <label htmlFor={user+"password"}>Enter password: </label>
    // <input id={password} type="password" placeholder="enter name"/>

    //For each field create new id
    const name = useId();
    const password = useId();
    const terms = useId();
    const skills = useId();

    return (
        <div>
            <form action="">
                {/* unique Id for all fields */}
                <label htmlFor={name}>Enter User Name: </label>
                <input id={name} type="text" placeholder="enter name" />
                <br /><br />
                <label htmlFor={password}>Enter password: </label>
                <input id={password} type="password" placeholder="enter name" />
                <br /><br />
                <label htmlFor={terms}>Enter terms: </label>
                <input id={terms} type="text" placeholder="enter name" />
                <br /><br />
                <label htmlFor={skills}>Enter skills: </label>
                <input id={skills} type="checkbox" placeholder="enter name" />
                <br /><br />
            </form>
        </div>
    )
}