import { Button } from "@material-ui/core";
import "./App.css";
import React, { createContext } from "react";
import Card from './Components/Card';
import NavBar from "./Components/NavBar";


function App() {
  const UserContext = createContext(null);

  return (
   
    <UserContext.Provider>
      <div className="App">
        <NavBar />
        <Card />
        <Button color="primary">Hello World</Button>
      </div>
    </UserContext.Provider>
  );
}

export default App;


