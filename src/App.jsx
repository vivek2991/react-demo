import Header from "./Header"

function App(){
  return <>
    {/* If you want to use more than 2 tags it must be wrap into div or anything else otherwise it will not work and give you an error */}
    <div>
      {/* This way you can call file Header which is same as components */}
      <Header />
      <h1>Hello React</h1>
      <h2>This is React Demo by VK</h2>
      <h3>Sum is: {sum()}</h3>
      {/* Below both ways to call a components */}
      <Fruit></Fruit>
      <Colors />
    </div>
    
  </>
}

// This is component
function Fruit(){
  return <>
    <h1>Apple</h1>
    <h3>Orange</h3>
  </>
}

// This is component
function Colors(){
  return <>
    <h1>Red</h1>
    <h3>Yellow</h3>
  </>
}

// This is normal function
function sum(){
  return 10 + 10
}

export default App