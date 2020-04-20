import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const oldDialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//       {
//       (store) => {
//
//         const onSendMessageClick = () => {
//           store.dispatch(sendMessageActionCreator());
//         }
//         const onNewMessageChange = body => {
//           store.dispatch(updateNewMessageBodyActionCreator(body));
//         }
//
//       return   <Dialogs updateNewMessageBody = {onNewMessageChange}
//                sendMessage = {onSendMessageClick}
//                dialogsPage = {store.getState().dialogsPage}/>
//       }
//     }
//
//     </StoreContext.Consumer>;
//   }

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));

    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());

    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


  // export default DialogsContainer;
export default DialogsContainer;
