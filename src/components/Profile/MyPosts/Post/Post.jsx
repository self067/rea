import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  // console.log(props);
  return ( 
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/get-pdb/770122/200f9305-aa1c-442b-af09-227346adaedf/s1200" alt="" />
      {props.message}
      <div><span>Likes: {props.likeCount}</span></div>
    </div>
  );
  }

  export default Post;

