import User29 from "./User-29"

function App29(){

    const displayName = (name) =>{
        alert(name);
    }

    const getUser=()=>{
        alert('Get User Function Called');
    }

    return(
        <div>
            <h2>Pass Function in Component as Props in React JS</h2>
            <h3>call parent component function from child component</h3><br />
            <User29 displayName={displayName} name="Vivek" getUser={getUser}/><br />
            <User29 displayName={displayName} name="Smriti" getUser={getUser}/><br />
            <User29 displayName={displayName} name="Shreyanka" getUser={getUser}/><br />
            <User29 displayName={displayName} name="Rachana" getUser={getUser}/><br />
        </div>
    )

}

export default App29