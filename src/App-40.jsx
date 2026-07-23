import { Fragment } from "react"

function App40() {
    return (
        // by default you need atleast one div as parent to use multiple html elements like 2-3 h2 to reduce it you can use fragment
        // without div you can use multiple elements so to reduce it you can use fragment
        //fragment will remove extra parent tags
        // <> </> this is also called fragment
        
        <Fragment>
            <h2>Fragment in React JS</h2>
            <h2>Fragment in React JS</h2>
        </Fragment>
    )
}

export default App40


// html output
// you can see div after root was removed which was extra

// <div id="root">
//     <h2>Fragment in React JS</h2>
//     <h2>Fragment in React JS</h2>
// </div>