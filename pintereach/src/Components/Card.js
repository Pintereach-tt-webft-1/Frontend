import React from "react";
import "./Card.css";
import axios from "axios";
// import {articles} from '../App'

const Card = () => {

    const articles = {
        "userarticleid": 5,
        "articletitle": "Gaming the World: How Sports Are Reshaping Global Politics and Culture",
        "category": "sports",
        "article": "asdfkj;lkjasdlgkjlkgjlskjglskjdglkjgdlk...."
    }


  const fetchData = () => {
    axios
      .get(`http://unit4-bw.herokuapp.com/userarticles/userarticles`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  fetchData();

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
        <h2>Article title: <br/> {articles.articletitle} </h2>
        <div className="article-card-category">
          Category: <br/> {articles.category}
        </div>
        <div className="article-card-number">
          Article Number: <br/> {articles.userarticleid} <br />
        </div>
        <div className="article-card-article">
          <p>
            Article: <br/> {articles.article}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
