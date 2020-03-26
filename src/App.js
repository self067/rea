import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src="https://theaosn.com/wp-content/uploads/Coyotes-Logo.png" alt="logo"/>
      </header>
      <nav className="nav">
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div></div>
        <div><a>Settings</a></div>
      </nav>
      <div className="content">Main Content</div>
    </div>
  );
}

export default App;
