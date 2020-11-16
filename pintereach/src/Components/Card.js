import React from 'react';
import './Card.css';

const Card = (props) => {

// const { userarticles, userarticleid, articletitle, category } = props.article;

    return (
        <div className="article-card">
            <h1>Article title here</h1>
            <div className="article-card-category">
                Category here: Gaming
            </div>
            <div className="article-card-number">
                Article Number here: 3<br/>
            </div>
            <div className="article-card-article">
                <p>Article here:<br/>
                    jdflkjsalgkjalgkjaslkfgdjalkejsfdglkajsdglkjasdgjdflkjsalgkjalg
                    jaslkfgdjalkejsfdglkajsdglkjasdgjdflkjsalgkjalgkjaslkfgdjalke
                    jsfdglkajsdglkjasdgjdflkjsalgkjalgkjaslkfgdjalkejsfdglkajsdglk
                    jasdgjdflkjsalgkjalgkjaslkfgdjalkejsfdglkajsdglkjasdgjdflkjsal
                    gkjalgkjaslkfgdj
                    alkejsfdglkajsdglkjasdg</p>
            </div>
        </div>
    )
}

export default Card


// [
//     {
//         "userid": 4,
//         "username": "admin",
//         "primaryemail": "admin@lambdaschool.local",
//         "userarticles": [
//             {
//                 "userarticleid": 5,
//                 "articletitle": "Gaming the World: How Sports Are Reshaping Global Politics and Culture",
//                 "category": "sports"
//             },
//             {
//                 "userarticleid": 6,
//                 "articletitle": "Article",
//                 "category": "misc"
//             }
//         ],
//         "roles": [
//             {
//                 "role": {
//                     "roleid": 1,
//                     "name": "ADMIN"
//                 }
//             },
//             {
//                 "role": {
//                     "roleid": 2,
//                     "name": "USER"
//                 }
//             },
//             {
//                 "role": {
//                     "roleid": 3,
//                     "name": "DATA"
//                 }
//             }
//         ]
//     },
//     {
//         "userid": 7,
//         "username": "cinnamon",
//         "primaryemail": "cinnamon@lambdaschool.local",
//         "userarticles": [
//             {
//                 "userarticleid": 8,
//                 "articletitle": "Article",
//                 "category": "misc"
//             },
//             {
//                 "userarticleid": 9,
//                 "articletitle": "Article",
//                 "category": "misc"
//             },
//             {
//                 "userarticleid": 10,
//                 "articletitle": "Article",
//                 "category": "misc"
//             }
//         ],
//         "roles": [
//             {
//                 "role": {
//                     "roleid": 2,
//                     "name": "USER"
//                 }
//             },
//             {
//                 "role": {
//                     "roleid": 3,
//                     "name": "DATA"
//                 }
//             }
//         ]
//     },
//     {
//         "userid": 11,
//         "username": "barnbarn",
//         "primaryemail": "barnbarn@lambdaschool.local",
//         "userarticles": [
//             {
//                 "userarticleid": 12,
//                 "articletitle": "Article",
//                 "category": "misc"
//             }
//         ],
//         "roles": [
//             {
//                 "role": {
//                     "roleid": 2,
//                     "name": "USER"
//                 }
//             }
//         ]
//     },
//     {
//         "userid": 13,
//         "username": "puttat",
//         "primaryemail": "puttat@school.lambda",
//         "userarticles": [],
//         "roles": [
//             {
//                 "role": {
//                     "roleid": 2,
//                     "name": "USER"
//                 }
//             }
//         ]
//     },
//     {
//         "userid": 14,
//         "username": "misskitty",
//         "primaryemail": "misskitty@school.lambda",
//         "userarticles": [],
//         "roles": [
//             {
//                 "role": {
//                     "roleid": 2,
//                     "name": "USER"
//                 }
//             }
//         ]
//     }
// ]