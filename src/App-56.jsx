import { lazy, Suspense, useState } from 'react'
import User56 from './User-56';

const User = lazy(()=>import('./User-56'))

function App56(){

    const [load, setLoad] = useState(false);

    return(
        <div>
            <h1>Lazy Loading in React JS</h1>
            {
                load? <Suspense fallback={<h3>Loading...</h3>}> <User56 /> </Suspense>:null
            }
            <button onClick={()=>setLoad(true)}>Load User</button>
        </div>
    )
}

export default App56