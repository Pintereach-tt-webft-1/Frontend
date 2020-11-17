import "./App.css";

import React, { createContext, useState } from "react";
import Card from './Components/Card';
import ArticleList from "./Components/ArticleList";
import SignIn from './Components/SignIn';
import App from "./App"


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
  const [savedList, setSavedList] = useState([]);
  
  //function that handles creating a new array with the article objects, **need to handle this using context
  const addToSavedList = article => {
    setSavedList([...savedList, article]);
  };

  const UserContext = createContext(null);

  return (

    <UserContext.Provider>
      <div className="App">
        <ArticleList addToSavedList={addToSavedList} articles={articles}/>
        <Card />
        <SignIn/>

        <Button color="primary">Hello World</Button>
 
      </div>
    </UserContext.Provider>
  );
}

export default App;

