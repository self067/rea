import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props)  => {

  return (

    <div className="app-wrapper">
      <Header/>
      <Nav/>
     
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsContainer  />} />
        <Route path='/profile' render={ () => <Profile />} />
        <Route path='/users' render={ () => <UsersContainer  />} />

      </div>

    </div>
    
  );
}

export default App;
