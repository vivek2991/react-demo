import { useState } from "react"
import College42 from "./College-42"
import { SubjectContext } from "./ContextData-42"

function App42() {

    const [subject, setSubject] = useState('');
    return (
        <div style={{ backgroundColor: 'yellow', padding: '50px' }}>
            <SubjectContext.Provider value={subject}>

            <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
                <option value="">Select Subject</option>
                <option value="Maths">Maths</option>
                <option value="English">English</option>
                <option value="History">History</option>
                <option value="Account">Account</option>    
            </select>    
                <h2>Context API in React JS</h2>
                <button onClick={()=>setSubject('')}>Clear Subject</button>
                <College42 />
            </SubjectContext.Provider>
        </div>
    )
}

export default App42