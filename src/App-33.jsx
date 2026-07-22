//Donn't use this like outside and use in different function
//let count = 0;
function App33() {
    return (
        <div>
            <h2>Keeping Components Pure in React JS</h2>
            {/* It will give you wrong output */}
            {/* <Counter />
            <Counter />
            <Counter />
            <Counter /> */}

            {/* use instead */}
            <Counter count={1}/>
            <Counter count={2}/>
            <Counter count={3}/>
            <Counter count={4}/>
        </div>
    )
}

const Counter=({count})=>{
    // count = count + 1;
    // It gives you output 2,4,6,8 instead 1,2,3,4
            return <h1>Counter {count}</h1>
}

export default App33