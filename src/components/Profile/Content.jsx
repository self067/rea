import React from 'react';
import classes from './Content.module.css';
import Profile from './Profile';

const Content = () => {
  return (
    <div className={classes.content}>
    <div>
      <img src="https://www.look.com.ua/large/201512/141403.jpg" alt="pic"/>
    </div>
    <div>
      <img alt="logo2" src="https://felomena.com/wp-content/images/sonnik/bukva/k/kot.jpg" />
    </div>
    <Profile/>
  </div>

);
  }

  export default Content;

