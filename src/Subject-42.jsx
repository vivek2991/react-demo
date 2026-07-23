import { useContext } from "react"
import { SubjectContext } from "./ContextData-42"

function Subject42() {

    const subject = useContext(SubjectContext)
    return (
        <div style={{backgroundColor:'red', padding:'30px'}}>
            <h2>Subject is: {subject}</h2>
        </div>
    )
}

export default Subject42