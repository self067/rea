import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
// import {rerenderEntireTree} from './render';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export const rerenderEntireTree = (state) => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}


store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
