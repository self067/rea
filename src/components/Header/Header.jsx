import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
  return (
      <header className={classes.header}>
        <img className={classes.logo} src="https://theaosn.com/wp-content/uploads/Coyotes-Logo.png" alt="logo"/>
        <div className={classes.loginBlock}>
          { props.isAuth ? props.login:
          <NavLink to={'/login'}>Login</NavLink>}

        </div>
      </header>
  );
  }

  export default Header;

