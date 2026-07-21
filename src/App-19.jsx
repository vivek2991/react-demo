import { useEffect, useState } from "react";

function App19(){

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  //call here so it callOnce() called only once
  useEffect(()=>{
    callOnce();
  },[])
  
  function callOnce(){
    console.log('CallOnce function Called');
  }

  // this function called everytime when click on button because it called App19 whole section actually we want to call it once only so useEffet hook will work here
  //callOnce();

  //pass counter state here so when counter button clicked its state called means function called otherwise it will not called when click on data button
  useEffect(()=>{
    CounterFunction();
  },[counter])

  function CounterFunction(){
    console.log('CounterFunction', counter);
    
  }

  return(
    <div>
      <h1>Hooks in React JS</h1>
      <h2>useEffect Hooks in React JS</h2>
      <button onClick={()=>setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={()=>setData(data + 1)}>Data {data}</button>
    </div>
  )

}

export default App19