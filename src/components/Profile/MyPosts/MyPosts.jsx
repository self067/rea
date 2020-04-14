import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.post} likeCount={p.likes} id={p.id}/>);


  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="2"></textarea>
        </div>
        <button>Add Post</button>
        <button>Remove Post</button>
        
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
     
  </div>

  );
}

export default MyPosts;

