function App15() {

  const userNames = ['vivek', 'Smriti', 'Shreyanka'];

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
      <h2>Loop in JSX with Map Function</h2>
      <table border={"1"}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )

}

export default App15