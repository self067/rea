import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  let posts = [
    { id: 1, likes: 3, post: "gjh sjdf ggggggggg"},
    { id: 2, likes: 5, post: "gjh sjdf ggggggggg"},
    { id: 3, likes: 1, post: "gsdfvsvsjdf ggggj"},
    { id: 4, likes: 30, post: "gsfvrtnjh sjdf ggg"},
    { id: 5, likes: 13, post: "ryngrynrjh sjdf gg"}
    ];

  let postsElements = posts.map( p => <Post message={p.post} likeCount={p.likes} id={p.id}/>);


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

