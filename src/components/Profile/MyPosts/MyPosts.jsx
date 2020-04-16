import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likes} id={p.id} />);

  let newPostElement = React.createRef();

  let addPost = () => {

    // props.addPost();
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = () => {
    // props.updateNewPostText(newPostElement.current.value);
    props.dispatch(updateNewPostActionCreator(newPostElement.current.value));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <button onClick={addPost}>Add Post</button>
        <button>Remove Post</button>

      </div>
      <div className={s.posts}>
        {postsElements}
      </div>

    </div>

  );
}

export default MyPosts;

