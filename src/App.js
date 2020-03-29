import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Content from './components/Profile/Content';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Nav/>
     
      <div className='app-wrapper-content'>
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
