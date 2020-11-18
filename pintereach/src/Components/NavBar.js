import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogIn from './LogIn'
import SignIn from './SignIn'

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1)
  }
`;

const NavBarStyles = styled.nav`
    opacity: 0;
    animation: ${kf} 2s ease-in-out forwards;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 2%;
`

const AllLinksStyles = styled.div`
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 1.8rem;

`

const EachLinkStyles = styled(Link)`
    text-decoration: none;
    color: black ;
    padding: 1% 3%;
    border-radius: 15px;
    border: solid 2px black;
    
    &:hover {
        transform: scale(1.15);
        transition: transform 0.5s ease-in-out;
        background-color: black;
        color: white;
    }
    transition: transform 0.5s ease-in-out;

`


function NavBar() {

    return (
        <div className='NavBar'>
            <NavBarStyles>
                <img src="https://i.imgur.com/hbzvVQU.png" alt="pintereach logo"/>
                <AllLinksStyles className='nav-links'>
                    <EachLinkStyles to='/'>Home</EachLinkStyles>
                    <EachLinkStyles to='/signin'>Sign In</EachLinkStyles>
                    <EachLinkStyles to='/login'>Log In</EachLinkStyles>
                </AllLinksStyles>
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