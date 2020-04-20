import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const OLDMyPostsContainer = () => {
//   // const state = props.store.getState();
//
//   return (
//       <StoreContext.Consumer>
//         {
//         (store) => {
//           const state = store.getState();
//
//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }
//
//           const onPostChange = (text) => {
//             store.dispatch(updateNewPostActionCreator(text));
//           }
//
//           return <MyPosts updateNewPostText={onPostChange}
//                    addPost={addPost}
//                    posts={state.profilePage.posts}
//                    newPostText={state.profilePage.newPostText}/>
//
//         }
//       }
//       </StoreContext.Consumer>
//   );
// }


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch( addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

