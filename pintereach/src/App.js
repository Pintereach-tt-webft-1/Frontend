import "./App.css";
import React, { createContext } from "react";
import SignIn from './Components/SignIn';
import App from "./App"



function App() {
  const UserContext = createContext(null);

  return (

    <UserContext.Provider>
      <div className="App">
        {/* <SignIn/> */}
        <App/>
      </div>
    </UserContext.Provider>
  );
}

export default App;


