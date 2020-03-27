import React, { Profiler } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';

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
