import React from 'react';
import s from './Nav.module.css';

function Nav() {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a href="/profile">Profile</a></div>
      <div className={s.item}>
        <a href="/">Messages</a></div>
      <div className={s.item}>
        <a href="/dialogs">News</a></div>
      <div className={s.item}>
        <a href="/">Music</a></div>
      <div className={s.item}>
        <a href="/">Settings</a></div>
    </nav>
  );}

  export default Nav;
  