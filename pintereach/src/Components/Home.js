import React from 'react';
import './Home.css';
import { Link, Route } from 'react-router-dom';
import SignIn from './SignIn';



export default function Home(){
    return(<div className="home-div" >
            <div className="home-text">
            <h1>Welcome To Pintereach.</h1>
            <h2>Save articles. Share with your friends.</h2>
            <Link className='create' to='/signin'>Create Free Account!</Link>
            </div>
            <Route path='/signin'>
                <SignIn />
            </Route>
       </div>)
}

