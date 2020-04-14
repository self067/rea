import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1,  name: "Dimych"},
  {id: 2,  name: "Roma"},
  {id: 3,  name: "Sveta"},
  {id: 4,  name: "Sergey" },
  {id: 5,  name: "Andry"}
];

let messages = [
  { id: 1, message: "gjh sjdf ggggggggg"},
  { id: 2, message: "gjh sjdf ggggggggg"},
  { id: 3, message: "gsdfvsvsjdf ggggj"},
  { id: 4, message: "gsfvrtnjh sjdf ggg"},
  { id: 5, message: "ryngrynrjh sjdf gg"}
  ];

let posts = [
  { id: 1, likes: 3, post: "gjh sjdf ggggggggg"},
  { id: 2, likes: 5, post: "gjh sjdf ggggggggg"},
  { id: 3, likes: 1, post: "gsdfvsvsjdf ggggj"},
  { id: 4, likes: 30, post: "gsfvrtnjh sjdf ggg"},
  { id: 5, likes: 13, post: "ryngrynrjh sjdf gg"}
  ];



ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
