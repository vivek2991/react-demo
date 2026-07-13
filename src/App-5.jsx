function App5() {

  const name = "Vivek Patel"
  const name1 = ""
  const userObj = {
    name: "Vivek Patel VK",
    email: "vivekpatel@gmail.com",
    age: 34
  }

  const userArray = ['vivek', 'Vishal', 'Dipika']

  let path = "https://media.licdn.com/dms/image/v2/D4D35AQEcoP5HszAU1w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731927699449?e=1784538000&v=beta&t=_JCPx897oSf9JbR-6poXYlZp_PEUgrCko3nLg62Nn-c"

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
      {/* printing array  */}
      <h2>User Object Array value Print</h2>
      <h3>User Name: {userObj.name}</h3>
      <h3>User email: {userObj.email}</h3>
      <h3>User age: {userObj.age}</h3>
       {/* printing array first value  */}
      <h3>First Value of Array: {userArray[0]}</h3>
      {/* pass image path dynamically which defined above */}
      <img src={path} alt="Vivek Patel" width={150} height={150}/>
      {/* Name value passed dynamic */} <br />
      <input type="text" value={name}/>

    </div>
  );
}

export default App5