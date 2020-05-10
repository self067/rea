import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";


const ProfileInfo = (props) => {
  if(props.profile)
  return (
    <div  className={s.profileInfo}>
      <div>
        <img src="https://www.look.com.ua/large/201512/141403.jpg" alt="pic"/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="logo2"  />
      </div>
    </div>
  )
  else return <Preloader />;
}

  export default ProfileInfo;
