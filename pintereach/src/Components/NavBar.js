import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import LogIn from './LogIn'
import SignIn from './SignIn'

const NavBarStyles = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 2%;
`

const NavLinkStyles = styled.div`
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 20px;
    text-decoration: none;

`


function NavBar() {

    return (
        <div className='NavBar'>
            <NavBarStyles>
                <img src="https://i.imgur.com/hbzvVQU.png" width="300px" alt="pintereach logo"/>
                <NavLinkStyles className='nav-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/signin'>Sign In</Link>
                    <Link to='/login'>Log In</Link>
                </NavLinkStyles>
            </NavBarStyles>
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