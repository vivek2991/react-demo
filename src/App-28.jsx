import { useRef } from "react";

function App28() {

  const userRef = useRef();
  const passwordRef = useRef();

  const handleForm=(event)=>{
    event.preventDefault();
    const user = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;
    console.log(user, password);
  }

  const handleFormRef=(event)=>{
     event.preventDefault();
     const user = userRef.current.value;
     const password = passwordRef.current.value;
     console.log("handleFormRef", user, password);
     

  }

  return (
    <div>
      <h2>Uncontrolled Components in React JS</h2>
      <form action="" onSubmit={handleForm}>
      <input type="text" id="user" placeholder="Enter user name"/>
      <br /><br />
      <input type="password" id="password" placeholder="Enter Password"/>
      <br /><br />
      <button>Submit</button>
      </form>

      <hr />
      <h2>Uncontrolled Components wiht useRef</h2>
      <form action="" onSubmit={handleFormRef}>
      <input ref={userRef} type="text" id="userRef" placeholder="Enter user name"/>
      <br /><br />
      <input ref={passwordRef} type="password" id="passwordRef" placeholder="Enter Password"/>
      <br /><br />
      <button>Submit with Ref</button>
      </form>
    </div>
  );
}

export default App28
