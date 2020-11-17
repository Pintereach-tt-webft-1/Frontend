import React from 'react';
import './Card.css';



const Card = () => {

    
    return (
        <div className="article-container">
        <div className="article-card">
        <div className="login-logo" >
            <img src="https://i.imgur.com/lmdVQMv.png" width="200px" alt="pintereach logo"/>
        </div>
            <h2>Article title here: </h2>
            <div className="article-card-category">
                Category here: 
            </div>
            <div className="article-card-number">
                Article Number here:  <br/>
            </div>
            <div className="article-card-article">
                <p>Article here:<br/>
                   </p>
            </div>
        </div>
      </div>  
    )
}

export default Card
