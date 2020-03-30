import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div  className={s.profileInfo}>
      <div>
        <img src="https://www.look.com.ua/large/201512/141403.jpg" alt="pic"/>
      </div>
      <div className={s.descriptionBlock}>
        <img alt="logo2" src="https://felomena.com/wp-content/images/sonnik/bukva/k/kot.jpg" />
      </div>
    </div>
);
}

  export default ProfileInfo;

