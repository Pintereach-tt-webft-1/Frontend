import React from "react";
import "./Card.css";
import ArticleList from './ArticleList';

const Card = (props) => {


  return (
    <div className="article-container">
      <div className="article-card">
        <div className="login-logo">
          <img
            src="https://i.imgur.com/lmdVQMv.png"
            width="200px"
            alt="pintereach logo"
          />
        </div>
        <ArticleList articles={props.articles} savedArticles={props.savedArticles} articletitle={props.articletitle} viewSavedHandler={props.viewSavedHandler} />
      </div>
    </div>
  );
};

export default Card;
