import { useEffect } from "react";

const Counter = ({count, data}) => {

    const handleCounter=()=>{
        console.log('handleCounter Called');
        
    }

    const handleData=()=>{
        console.log('hanldeData Called');
    }

    //call everytime when counter called in App20
    //handleCounter();

    //Call once
    useEffect(()=>{
         handleCounter();
    }, [])

    //It only call when click on data - when data state changed
    useEffect(()=>{
         handleData();
    }, [count, data])

    return(
        <div>
            <h2>Counter Value {count}</h2>
            <h2>Data Value {data}</h2>
        </div>
    )
}

export default Counter;