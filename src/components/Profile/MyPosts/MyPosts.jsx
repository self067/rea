import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts() {
  return (

    <div className={s.posts}>

      My Posts
      <div>
        <textarea name="" id="" cols="30" rows="2"></textarea>
        <button>Add Post</button>
        <button>Remove Post</button>
        
      </div>
      <div className={s.posts}>
      <Post message='HI'/>
      <Post message="It's my "/>
      <Post/>
      </div>
     
  </div>


);
  }

  export default MyPosts;

