import React, { Profiler } from 'react';
import classes from './Profile.module.css';

function Profile() {
  return (
    <div className={classes.profile}>
      My Posts
      <div>
        New post
      </div>
      <div className="posts">
        <div className='item'>
          post 1
        </div>
        <div className='item'>
          post 2
        </div>
      </div>
     
  </div>
);
}

  export default Profile;

