import "./App.css";
import React, { createContext } from "react";
import NavBar from './Components/NavBar';



function App() {

  const UserContext = createContext(null);

  return (
   
    <UserContext.Provider>
      <div className="App">
        <header> 
          <NavBar />
        </header>

      </div>
    </UserContext.Provider>
  );
}

export default App;

