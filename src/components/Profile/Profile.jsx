import React from 'react';
// import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
  return (
    <div>

    <div>
      <img src="https://www.look.com.ua/large/201512/141403.jpg" alt="pic"/>
    </div>
    <div>
      <img alt="logo2" src="https://felomena.com/wp-content/images/sonnik/bukva/k/kot.jpg" />
    </div>
{/*  Profile */}
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/770122/200f9305-aa1c-442b-af09-227346adaedf/s1200" alt="" srcset=""/>
      </div>
    <MyPosts/>     
    </div>
);
}

  export default Profile;

