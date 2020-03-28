import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
  return (
    <div className={classes.profile}>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/770122/200f9305-aa1c-442b-af09-227346adaedf/s1200" alt="" srcset=""/>
      </div>
    <MyPosts/>     
    </div>
);
}

  export default Profile;

