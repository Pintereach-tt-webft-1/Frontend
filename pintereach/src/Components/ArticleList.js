import React from "react";
// import { Link } from "react-router-dom"; //uncomment after adding link to individual cards



function ArticleList(articles) { //will pass props when api is set up perhaps something like ArticleList({object}) or ArticleList(props)
  console.log('ArticleList articles.articles.userarticles: ', articles.articles.userarticles)

    //uncomment and insert inplace of <h2>{article.articletitle}</h2>after .map function, after api has been set up
    // <Link key={article.id} to={`/articles/${article.id}`}>
    // <h2>{article.articletitle}</h2>
    // </Link>
  return (
    <div className = "article-list">
        <h1>ArticleList</h1>
        {
            articles.articles.userarticles.map(article => (
              
                <h3>{article.articletitle}</h3>
              
            ))
          }
        
    </div>
  );
}

export default ArticleList;

