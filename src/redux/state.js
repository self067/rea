const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {

  _state: {

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
      ],
      newMessageBody: ""
    },
    sidebar: {
  
    }
  
  },

  _callSubscriber() {},

  getState() { return this._state;},
  subscribe(observer) { this._callSubscriber = observer; },

  // addPost() {
  //   const newPost = {
  //     id: 6,
  //     post: this._state.profilePage.newPostText,
  //     likes: 0
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) { // type: 'ADD-POST'
    switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        post: this._state.profilePage.newPostText,
        likes: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      break;
    case UPDATE_NEW_POST_TEXT:
      this._state.profilePage.newPostText = action.newText;
      break;

    case UPDATE_NEW_MESSAGE_BODY:
      this._state.dialogsPage.newMessageBody = action.body;
      break;

      case SEND_MESSAGE:
      this._state.dialogsPage.messages.push({ id: 6, message: this._state.dialogsPage.newMessageBody});
      this._state.dialogsPage.newMessageBody = '';
      break;

    default: break;

    }
    this._callSubscriber(this._state);

  }



}


export const addPostActionCreator = () =>  ({type: ADD_POST});

export const updateNewPostActionCreator = newText => ({type: UPDATE_NEW_POST_TEXT,  newText: newText});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = body => ({type: UPDATE_NEW_MESSAGE_BODY,  body: body});




export default store;
//window.store = store;
