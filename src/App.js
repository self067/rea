import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import { Route } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props)  => {

  return (

    <div className="app-wrapper">
      <Header/>
      <Nav/>
     
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsContainer  />} />
        <Route path='/profile/:userId' render={ () => <ProfileContainer />} />
        <Route path='/users' render={ () => <UsersContainer  />} />

      </div>

    </div>
    
  );
}

export default App;
