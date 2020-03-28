import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Content from './components/Profile/Content';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Content/>
     
    </div>
  );
}

export default App;
