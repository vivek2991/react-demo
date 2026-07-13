function App5() {

  const name = "Vivek Patel"
  const name1 = ""
  let x = 10;
  let y = 20;

  function fruit(){
    return "Apple"
  }

  function sum(a,b){
     return a + b 
  }

  function operation(a,b,op){
    // if condition 
    if(op=="+"){
      return a+b
    } else if(op=="-"){
      return a-b
    } else {
      return a*b
    }
  }

  return (
    <div>
      <h1>JSX with Curly Braces</h1>
      {/* print name */}
      <h2>Name: {name}</h2>
      {/* print only if name1 is not blank condition based*/}
      <h2>Name: {name1?name1:"User not found"}</h2>
      {/* Perfrom operation on variable */}
      <h3>Total: {x + y}</h3>
      {/* call fruit function created above */}
      <h2>{fruit()}</h2>
      {/* calling sum function and pass value which created above */}
      <h3>Sum is: {sum(50,100)}</h3>
      {/* Calling function for the operation which is perfrom under if condition */}
      <h3>Value after Operation addition: {operation(20,10,"+")}</h3>
      <h3>Value after Operation deduction: {operation(20,10,"-")}</h3>
      <h3>Value after Operation no sign: {operation(20,10,"")}</h3>


    </div>
  );
}

export default App5