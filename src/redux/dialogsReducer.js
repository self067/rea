const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        { id: 1,  name: "Dimych"},
        { id: 2,  name: "Roma"},
        { id: 3,  name: "Sveta"},
    ],
    messages: [
        { id: 1, message: "gjh sjdf ggggggggg"},
        { id: 2, message: "gjh sjdf ggggggggg"},
        { id: 3, message: "gsdfvsvsjdf ggggj"},
    ],
    newMessageBody: ""
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;

        case SEND_MESSAGE:
            state.messages.push({ id: 6, message: state.newMessageBody});
            state.newMessageBody = '';
            break;

        default: break;

    }
    // this._callSubscriber(this._state);

    return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = body => ({type: UPDATE_NEW_MESSAGE_BODY,  body: body});

export default dialogsReducer;
