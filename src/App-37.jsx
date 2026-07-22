import { useState } from "react"

function App37() {

    // Array
    const [data, setData] = useState([
        'vivek',
        'Smriti',
        'Shreyanka'
    ])

    // object
    const [dataDetails, setdataDetails] = useState([
        {
            name: 'Vivek',
            age: '34'
        },
        {
            name: 'Smriti',
            age: '30'
        },
        {
            name: 'Shreyanka',
            age: '27'
        }
    ])

    const handleUser=(name)=>{
        data[data.length-1] = name;
        // array
        setData([...data]);
        
    }

    const handleUserAge=(age)=>{
        dataDetails[dataDetails.length-1].age = age;
        console.log(dataDetails);
        //object
        setdataDetails([...dataDetails])
        
    }
    return (
        <div>
            <h2>Updating Array in State</h2>
            <input onChange={(event)=>handleUser(event.target.value)} type="text" placeholder="Enter Last User Name"/>
            {
                data.map((item, index)=>(
                    <h3 key={index}>{item}</h3>
                ))
            }
            <hr />
            <input onChange={(event)=>handleUserAge(event.target.value)} type="text" placeholder="Enter Last User Age"/>
            {
                dataDetails.map((item,index)=>(
                    <h3 key={index}>{item.name}, {item.age}</h3>
                ))
            }
        </div>
    )
}

export default App37