import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  let postsData = [
    { id: 1, likes: 3, post: "gjh sjdf ggggggggg"},
    { id: 2, likes: 3, post: "gjh sjdf ggggggggg"},
    { id: 3, likes: 3, post: "gsdfvsvsjdf ggggj"},
    { id: 4, likes: 3, post: "gsfvrtnjh sjdf ggg"},
    { id: 5, likes: 3, post: "ryngrynrjh sjdf gg"}
    ];

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
      <Post message={postsData[0].post} likeCount={postsData[0].likes}/>
      <Post message={postsData[1].post} likeCount={postsData[1].likes}/>
      <Post message={postsData[2].post} likeCount={postsData[2].likes}/>
      <Post message={postsData[3].post} likeCount={postsData[3].likes}/>
      <Post message={postsData[4].post} likeCount={postsData[4].likes}/>
      </div>
     
  </div>


);
  }

  export default MyPosts;

