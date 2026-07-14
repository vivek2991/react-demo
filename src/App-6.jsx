function App6() {

  function callFun(){
    alert("Function Called")
  }

  const fruit=()=>{ 
    alert("apple")
  }

  const fruitName=(name)=>{ 
    alert(name)
  }

  return (
    <div>
        <h1>Event and function call in React</h1>
        {/* onClick its camel case C capital in react */}
        {/* You can call a function without any round bracket in React */}
        <button onClick={callFun}>Click Me</button><br />
        <button onClick={fruit}>Click Me</button><br /><br />

        {/* How to pass parameters and call in function */}
        <button onClick={()=>fruitName("Banana")}>Fruit Name</button>
    </div>
  )
}

export default App6