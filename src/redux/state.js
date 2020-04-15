import {rerenderEntireTree} from '../render';

let state = {

  profilePage: {
    posts: [
      { id: 1, likes: 3, post: "gjh sjdf ggggggggg"},
      { id: 2, likes: 5, post: "gjh sjdf ggggggggg"},
      { id: 3, likes: 1, post: "gsdfvsvsjdf ggggj"},
      { id: 4, likes: 30, post: "gsfvrtnjh sjdf ggg"},
      { id: 5, likes: 13, post: "ryngrynrjh sjdf gg"}
    ],
    newPostText: ''
  },
  dialogsPage: {
    dialogs: [
      { id: 1,  name: "Dimych"},
      { id: 2,  name: "Roma"},
      { id: 3,  name: "Sveta"},
      { id: 4,  name: "Sergey" },
      { id: 5,  name: "Andry"}
    ],

    messages: [
      { id: 1, message: "gjh sjdf ggggggggg"},
      { id: 2, message: "gjh sjdf ggggggggg"},
      { id: 3, message: "gsdfvsvsjdf ggggj"},
      { id: 4, message: "gsfvrtnjh sjdf ggg"},
      { id: 5, message: "ryngrynrjh sjdf gg"}
    ]
  },
  sidebar: {

  }

};

export const addPost = () => {
  const newPost = {
    id: 6,
    post: state.profilePage.newPostText,
    likes: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}



export default state;