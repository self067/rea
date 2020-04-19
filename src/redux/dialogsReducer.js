const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

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
