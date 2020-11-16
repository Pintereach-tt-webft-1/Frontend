

import { Button } from "@material-ui/core";
import "./App.css";
import React, { createContext } from "react";


function App() {
  const UserContext = createContext(null);

  return (

    <UserContext.Provider>
      <div className="App">
        <Button color="primary">Hello World</Button>
      </div>
    </UserContext.Provider>
  );
}

export default App;


