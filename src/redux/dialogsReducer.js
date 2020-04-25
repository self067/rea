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
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: state.newMessageBody}]
            };
        default:    break;
    }
    return state;
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = body => ({type: UPDATE_NEW_MESSAGE_BODY,  body: body});

export default dialogsReducer;
