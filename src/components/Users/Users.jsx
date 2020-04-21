import React from 'react';
import styles from './Users.module.css';


const Users = (props) => {
if( props.users.length === 0)
  props.setUsers( [
    { id: 1,  photo: "https://i.pinimg.com/originals/36/62/5f/36625fdbc9a25f0bb2770e9a3e8d2952.jpg", followed: false, fullName: "Dimych", status: "stat1", location: {city: "berdsk", country: "Russia"} },
    { id: 2,  photo: "https://avatars.mds.yandex.net/get-pdb/1686358/56dc4272-31fe-44f9-a1b3-03e7aefa5c4b/s1200?webp=false", followed: true, fullName: "Sveta", status: "stat", location: {city: "Minsk", country: "Belorus"} },
    { id: 3,  photo: "https://pp.userapi.com/c11345/u18058769/-6/x_5e701aa8.jpg", followed: false, fullName: "Roma", status: "sssss", location: {city: "Moscow", country: "Russia"} },
  ]
);
    return <div>
      {
        props.users.map( u => <div key = {u.id}>
          <span>
            <div>
              <img src={u.photo} className={styles.userPhoto}/>
            </div>
            <div>
              { u.followed ?
              <button onClick={()=>{props.unfollow(u.id)}}>Follow</button> :
              <button onClick={()=>{props.follow(u.id)}}>UnFollow</button>
              }
            </div>
          </span>

          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>

          </span>

        </div>)

      }
    </div>;

  }

  export default Users;

