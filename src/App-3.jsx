function App3() {
  //javascript variable directly use here with html
  const userName = "Vivek Patel";
  let x=20;
  let y=30;

  return (
    <div>
      {/* you can call JS variable easily with {} */}
      <h2>JSX in React Demo by: {userName}</h2>
      <h3>Total: {x*y}</h3>
      {/* in-built onclick event on button */}
      <button onClick={()=>alert("Hello")}>Click for Alert</button>
    </div>
  );
}

export default App3
