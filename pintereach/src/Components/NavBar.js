import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import LogIn from './LogIn'
import SignIn from './SignIn'


function NavBar() {

    return (
        <div className='NavBar'>
            <nav>
                <img src="https://i.imgur.com/lmdVQMv.png" width="200px" alt="pintereach logo"/>
                <div className='nav-links'>
                    {/* <Link to='/'>Home</Link> */}
                    <Link to='/signin'>Sign In</Link>
                    <Link to='/login'>Log In</Link>
                </div>
            </nav>
            <Switch>
            <Route path='/signin'>
              <SignIn />
            </Route>
            <Route path='/login'>
              <LogIn />
            </Route>
        </Switch>
        </div>
    )
}

export default NavBar;