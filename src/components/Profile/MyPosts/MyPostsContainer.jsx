import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <MyPosts updateNewPostText={onPostChange}
             addPost={addPost}
             newPostText={state.profilePage.newPostText}
             posts={state.profilePage.posts}/>
  );
}

export default MyPostsContainer;

