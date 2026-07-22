import { useState } from "react"

function App36() {

    const [data, setData] = useState({
        name: 'Vivek',
        address: {
            city: 'Bhavnagar',
            country: 'India'
        }
    });
    //const [name, setName] = useState('Vivek');
    const handleName=(val)=>{
        data.name = val;
        setData({...data})
    }
    const handleCity=(city)=>{
        data.address.city = city;        
        setData({...data, address:{...data.address,city}})
    }
    return (
        <div>
            <h2>Updating Object in State - React JS</h2>
            <input onChange={(event)=>handleName(event.target.value)} type="text" placeholder="Update Name"/>
            
            <input onChange={(event)=>handleCity(event.target.value)} type="text" placeholder="Update City"/>
            
            {/* <button onClick={handleName}>Update Name</button> */}
            <h2>Name: {data.name}</h2>
            <h2>City: {data.address.city}</h2>
            <h2>Country: {data.address.country}</h2>
        </div>
    )
}

export default App36