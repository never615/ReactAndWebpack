/**
 * Created by never615 on 8/22/16.
 */
// document.write('It works');

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import NewsList from './NewsList.js';
import '../static/css/app.css'

// class HelloWorld extends React.Component{
//     render(){
//         return(
//           <div>Hello World</div>
//         );
//     }
// }


// render(<NewsList/>, $('#content')[0]);

function get(url) {
    return Promise.resolve($.ajax(url));
}

get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(
        stories=>Promise.all(stories.slice(0, 30)
            .map(itemId=>get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')))
    )
    .then(
        items=>render(<NewsList items={items}/>, $('#content')[0])
    )
    .catch(
        err=> console.log("error occur", err)
    );


// get('https://hacker-news.firebaseio.com/v0/topstories.json')
//     .then(function (stories) {
//         return Promise
//             .all(stories.slice(0, 30)
//                 .map(itemId=>get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')))
//     })
//     .then(function (items) {
//         render(<NewsList items={items}/>, $('#content')[0]);
//     })
//     .catch(function (err) {
//         console.log("error occur", err);
//     });
