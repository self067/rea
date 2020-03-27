import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Content/>
      <Profile/>
    </div>
  );
}

export default App;
