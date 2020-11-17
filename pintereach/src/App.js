import "./App.css";
import React, { createContext } from "react";
import SignIn from './Components/SignIn';
import LogIn from "./Components/LogIn"



function App() {
  const UserContext = createContext(null);

  return (

    <UserContext.Provider>
      <div className="App">
        {/* <SignIn/> */}
        <LogIn/>
      </div>
    </UserContext.Provider>
  );
}

export default App;


