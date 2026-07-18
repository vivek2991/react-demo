import { useState } from "react"
import Student from "./student"
import College from "./College-18"

function App18() {

  const collegeData = [
    {
      name:"IIM Ahmedabad",
      city: "Ahmedabad",
      website: "https://www.iim.com",
      student: [
        {
          name: 'Vivek Patel',
          age: '34',
          email: 'vivek@gmail.com'
        },
        {
          name: 'Smriti',
          age: '30',
          email: 'smriti@gmail.com'
        },
        {
          name: 'Shreyanka',
          age: '27',
          email: 'shreyu@gmail.com'
        },
      ]
    },
    {
      name:"Bhavnagar Univercity",
      city: "Bhavnagar",
      website: "https://www.mkbu.com",
      student: [
        {
          name: 'Vivek Patel - Bhavnagar Univercity',
          age: '34',
          email: 'vivek@gmail.com'
        },
        {
          name: 'Smriti - Bhavnagar Univercity',
          age: '30',
          email: 'smriti@gmail.com'
        },
        {
          name: 'Shreyanka - Bhavnagar Univercity',
          age: '27',
          email: 'shreyu@gmail.com'
        },
      ]
    },
    {
      name:"GTU Ahmedabad",
      city: "Ahmedabad Greater Area",
      website: "https://www.gtu.com",
      student: [
        {
          name: 'Vivek Patel - GTU Ahmedabad',
          age: '34',
          email: 'vivek@gmail.com'
        },
        {
          name: 'Smriti - GTU Ahmedabad',
          age: '30',
          email: 'smriti@gmail.com'
        },
        {
          name: 'Shreyanka - GTU Ahmedabad',
          age: '27',
          email: 'shreyu@gmail.com'
        },
      ]
    },
    {
      name:"IIT Bombay",
      city: "Mumbai",
      website: "https://www.iitbombay.com",
      student: [
        {
          name: 'Vivek Patel - IIT Bombay',
          age: '34',
          email: 'vivek@gmail.com'
        },
        {
          name: 'Smriti - IIT Bombay',
          age: '30',
          email: 'smriti@gmail.com'
        },
        {
          name: 'Shreyanka - IIT Bombay',
          age: '27',
          email: 'shreyu@gmail.com'
        },
      ]
    },
    {
      name:"IIT Kanpur",
      city: "Kanpur",
      website: "https://www.iitkanpur.com",
      student: [
        {
          name: 'Vivek Patel 5',
          age: '34',
          email: 'vivek@gmail.com'
        },
        {
          name: 'Smriti 5',
          age: '30',
          email: 'smriti@gmail.com'
        },
        {
          name: 'Shreyanka 5',
          age: '27',
          email: 'shreyu@gmail.com'
        },
      ]
    }
  ]

  return(
    <div>
      <h1>Nested Looping in React JS</h1>
      {
        collegeData.map((college, index)=>
        <College college={college} />
        )
      }
    </div>
  )
}

export default App18