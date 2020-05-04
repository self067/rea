import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/user.png"
import {NavLink} from "react-router-dom";

let Users = (props) => {
  const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) pages.push(i);

  return <div>
    <div>
      {pages.map(p => {
        return <span className={props.currentPage === p && styles.selectedPage}
                     onClick={() => {
                       props.onPageChanged(p)
                     }}>{p}</span>
      })}
    </div>

    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto} alt="{u.id}"/>
            </NavLink>
          </div>
          <div>
            {u.followed ?
              <button onClick={() => {
                props.unfollow(u.id)
              }}>Follow</button> :
              <button onClick={() => {
                props.follow(u.id)
              }}>UnFollow</button>
            }
        </div>
        </span>

        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>"u.location.country"</div>
            <div>"u.location.city"</div>
          </span>

        </span>

      </div>)

    }
  </div>;

}
export default Users;