import React from "react";

// const {push} = useHistory(); // uncomment when nav is complete to avoid merge conflicts
// import { Link } from "react-router-dom"; //uncomment after adding link to individual cards




function ArticleList(props) { //will pass props when api is set up perhaps something like ArticleList({object}) or ArticleList(props)

    // const {push} = useHistory(); //uncomment when nav is complete to avoid merge conflicts

    // console.log('ArticleList articles.articles.userarticles: ', props.articles.userarticles) //to test data comming through


  const viewSavedHandler = () =>{
      console.log('clicking  View saved Articles button')
    // push('/saved-articles') //uncomment when nav is complete to avoid merge conflicts
  }

  const saveArticleHandler = (article) =>{
      console.log('clicking save article button')
    //   props.addToSavedList(article)
  }

  

    //uncomment and insert inplace of <h2>{article.articletitle}</h2>after .map function, after api has been set up
    // <Link key={article.id} to={`/articles/${article.id}`}>
    // <h2>{article.articletitle}</h2>
    // </Link>
  return (
    <div className = "article-list">

        <button onClick={viewSavedHandler} >View saved Articles</button>

        <h1>ArticleList</h1>
        {
            props.articles.userarticles.map(article => (
              <div className='article-list-title'>
                <h3>{article.articletitle}</h3>
                <button onClick={saveArticleHandler} >Save Article</button>
              </div>
    
            ))
          }
        
    </div>
  );
}

export default ArticleList;

