import "./App.css";

import React, { createContext, useState } from "react";
import Card from './Components/Card';
import ArticleList from "./Components/ArticleList";
import SignIn from './Components/SignIn';
<<<<<<< HEAD
// import App from "./App"
=======
import NavBar from './Components/NavBar';
import LogIn from './Components/LogIn';
>>>>>>> fe7642a1a771ac35770c72eb8f50895fb9021447


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
        <header> 
          <NavBar />
        </header>

        <ArticleList addToSavedList={addToSavedList} articles={articles}/>
        <Card />
        <SignIn/>
<<<<<<< HEAD

        {/* <Button color="primary">Hello World</Button> */}
=======
        <LogIn/>
>>>>>>> fe7642a1a771ac35770c72eb8f50895fb9021447
 
      </div>
    </UserContext.Provider>
  );
}

export default App;

