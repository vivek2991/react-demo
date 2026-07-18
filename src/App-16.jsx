import User from "./user-16";

function App16() {

  const userData = [
    {
      name: 'Vivek',
      age: '34',
      email: 'vk@gmail.com',
      id: 1
    },
    {
      name: 'Smriti',
      age: '30',
      email: 'smriti@gmail.com',
      id: 2
    },
    {
      name: 'Shreyanka',
      age: '27',
      email: 'shreya@yahoo.com',
      id: 3
    },
    {
      name: 'Rachna',
      age: '33',
      email: 'rachu@gmail.com',
      id: 4
    }
  ];

  return (
    <div style={{ paddingTop: "20px" }}>
      <h2>Reuse Component in Loop</h2>
      {
        userData.map((user) => (
          <div key={user.id}>
            {/* reuse of component because it inside loop */}
            {/* pass object user to user-16 component */}
            <User data={user} />
          </div>
        ))
      }


    </div>
  )

}

export default App16