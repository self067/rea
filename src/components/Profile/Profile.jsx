import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div  className={s.profile}>

      <div>
        <img src="https://www.look.com.ua/large/201512/141403.jpg" alt="pic"/>
      </div>
      <div>
        <img alt="logo2" src="https://felomena.com/wp-content/images/sonnik/bukva/k/kot.jpg" />
      </div>

      <MyPosts/>     
    </div>
);
}

  export default Profile;

