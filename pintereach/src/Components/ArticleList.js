import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
      "userid": 4,
      "username": "admin",
      "primaryemail": "admin@lambdaschool.local",
      "userarticles": [
          {
              "userarticleid": 5,
              "articletitle": "Gaming the World: How Sports Are Reshaping Global Politics and Culture",
              "category": "sports"
          },
          {
              "userarticleid": 6,
              "articletitle": "Article",
              "category": "misc"
          }
      ],
      "roles": [
          {
              "role": {
                  "roleid": 1,
                  "name": "ADMIN"
              }
          },
          {
              "role": {
                  "roleid": 2,
                  "name": "USER"
              }
          },
          {
              "role": {
                  "roleid": 3,
                  "name": "DATA"
              }
          }
      ]
  }
]

function ArticleList() { //will pass props when api is set up perhaps something like ArticleList({object}) or ArticleList(props)
  console.log('ArticleList articles: ', articles)

    // <Link key={article.id} to={`/articles/${article.id}`}>
    // <h2>{article.articletitle}</h2>
    // </Link>
  return (
    <div className = "article-list">
      {
        articles.userarticles.map(article => (
          
            <h2>{article.articletitle}</h2>
          
        ))
      }
    </div>
  );
}

export default ArticleList;


  // ,
  // {
  //     "userid": 7,
  //     "username": "cinnamon",
  //     "primaryemail": "cinnamon@lambdaschool.local",
  //     "userarticles": [
  //         {
  //             "userarticleid": 8,
  //             "articletitle": "Article",
  //             "category": "misc"
  //         },
  //         {
  //             "userarticleid": 9,
  //             "articletitle": "Article",
  //             "category": "misc"
  //         },
  //         {
  //             "userarticleid": 10,
  //             "articletitle": "Article",
  //             "category": "misc"
  //         }
  //     ],
  //     "roles": [
  //         {
  //             "role": {
  //                 "roleid": 2,
  //                 "name": "USER"
  //             }
  //         },
  //         {
  //             "role": {
  //                 "roleid": 3,
  //                 "name": "DATA"
  //             }
  //         }
  //     ]
  // },
  // {
  //     "userid": 11,
  //     "username": "barnbarn",
  //     "primaryemail": "barnbarn@lambdaschool.local",
  //     "userarticles": [
  //         {
  //             "userarticleid": 12,
  //             "articletitle": "Article",
  //             "category": "misc"
  //         }
  //     ],
  //     "roles": [
  //         {
  //             "role": {
  //                 "roleid": 2,
  //                 "name": "USER"
  //             }
  //         }
  //     ]
  // },
  // {
  //     "userid": 13,
  //     "username": "puttat",
  //     "primaryemail": "puttat@school.lambda",
  //     "userarticles": [],
  //     "roles": [
  //         {
  //             "role": {
  //                 "roleid": 2,
  //                 "name": "USER"
  //             }
  //         }
  //     ]
  // },
  // {
  //     "userid": 14,
  //     "username": "misskitty",
  //     "primaryemail": "misskitty@school.lambda",
  //     "userarticles": [],
  //     "roles": [
  //         {
  //             "role": {
  //                 "roleid": 2,
  //                 "name": "USER"
  //             }
  //         }
  //     ]
  // }