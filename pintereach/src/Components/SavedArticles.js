import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function SavedArticles( savedList ) {
  return (
    <div className="saved-articles">
      <h3>Saved Articles:</h3>
      {savedList.map(article => {
        return (
          <NavLink
            // to={`/articles/${article.id}`} uncomment once nav is set up
            // key={article.id} //uncomment depending on article object structure
          >
            <span >{article.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SavedArticles;
