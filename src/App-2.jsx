//export mentioned at the end of file import as below
import Login from './userComponent.jsx'
//default export import as below { } braces use
//import multiple {Profile and Settings} from './userComponent.jsx'
import {Profile, Setting, UserKey} from './userComponent.jsx'


function App2() {
  return (
    <div>
      <h2>Importing and Exporting Components</h2>
      <Login /> <br />
      <Profile /> <br /> 
      <Setting /> <br />
      <h1>{UserKey}</h1> <br />
    </div>
  );
}

export default App2
