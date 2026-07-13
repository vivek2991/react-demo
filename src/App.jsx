import Header from "./Header"

function App(){
  return <>
    {/* If you want to use more than 2 tags it must be wrap into div or anything else otherwise it will not work and give you an error */}
    <div>
      <Header />
      <h1>Hello React</h1>
      <h2>This is React Demo by VK</h2>
    </div>
  </>
}

export default App