import { Button } from "@material-ui/core";
import "./App.css";
import React, { createContext } from "react";
import Card from './Components/Card';
import ArticleList from "./Components/ArticleList";
import SignIn from './Components/SignIn';
import LogIn from "./Components/LogIn"


const articles = 
  {
      "userid": 4,
      "username": "admin",
      "primaryemail": "admin@lambdaschool.local",
      "userarticles": [
          {
              "userarticleid": 5,
              "articletitle": "Gaming the World: How Sports Are Reshaping Global Politics and Culture",
              "category": "sports"
          },
          {
              "userarticleid": 6,
              "articletitle": "Robert is great",
              "category": "misc"
          }
      ]
  }


function App() {
  const UserContext = createContext(null);

  return (

    <UserContext.Provider>
      <div className="App">
        <ArticleList articles={articles}/>
        <Card />
        

        <SignIn/>

        <Button color="primary">Hello World</Button>
      </div>
    </UserContext.Provider>
  );
}

export default App;


