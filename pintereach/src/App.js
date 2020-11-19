import "./App.css";
import React, { createContext } from "react";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';



function App() {

  const UserContext = createContext(null);

  return (
   
    <UserContext.Provider>
      <div >
        <header> 
          <NavBar />
        </header>

        
        <footer>
        <Footer/>
        </footer>
 



      </div>
    </UserContext.Provider>
  );
}

export default App;

