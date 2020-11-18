import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import ArticleList from './ArticleList'
import LogIn from './LogIn'
import SignIn from './SignIn'
import Card from './Card'

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
    letter-spacing: .1em;
    position: relative; 
    text-decoration: none;
    color: black ;
    padding: 1% 3%;
    ::before {
        background: #fff;
        content: '';
        filter: blur(10px); 
        opacity: .75;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -1; 
    }
    
    &:hover {
        transform: scale(1.1);
        transition: transform 0.5s ease-in-out;
        background-color: #03e9f4;
        border-radius: 15px;
        border: solid 2px black;
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
                    <EachLinkStyles to='/signin'>Sign Up</EachLinkStyles>
                    <EachLinkStyles to='/login'>Log In</EachLinkStyles>
                    <EachLinkStyles to='/article-list'>Articles</EachLinkStyles>
                </AllLinksStyles>
            </NavBarStyles>
            <Switch>
                <Route path='/signin'>
                    <SignIn />
                </Route>
                <Route path='/login'>
                    <LogIn />
                </Route>

                <Route path='/article-list'>
                    <ArticleList />
                </Route>

                <Route path='/card/:id'>
                    <Card />
                </Route>
            </Switch>
        </div>
    )
}

export default NavBar;