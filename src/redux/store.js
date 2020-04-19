import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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

  dispatch(action) { // type: 'ADD-POST'

    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
    this._state.sidebar = sidebarReducer(this._state.sidebar,action);

    this._callSubscriber(this._state);
  }

}

export default store;
//window.store = store;
