import React from 'react';
import classes from './Header.module.css';

function Header() {
  return (
      <header className={classes.header}>
        <img className={classes.logo} src="https://theaosn.com/wp-content/uploads/Coyotes-Logo.png" alt="logo"/>
      </header>
  );
  }

  export default Header;

