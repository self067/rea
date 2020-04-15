import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Content from './components/Profile/Content';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const App = (props)  => {
  return (

    <div className="app-wrapper">
      <Header/>
      <Nav/>
     
      <div className='app-wrapper-content'>
        {/* <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} /> */}
        <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/profile' render={ () => <Profile 
                                    profilePage={props.state.profilePage} 
                                    addPost={props.addPost}
                                    updateNewPostText={props.updateNewPostText}
                                    />} />

      </div>

    </div>
    
  );
}

export default App;
