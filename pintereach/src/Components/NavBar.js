import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    return (
        <div className='NavBar'>
            <nav>
                <h1>Pintereach</h1> {/* Instead have the logo here*/}
                <div className='nav-links'>
                    <Link to='/'>Sign In</Link>
                    <Link to='/'>Log In</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;