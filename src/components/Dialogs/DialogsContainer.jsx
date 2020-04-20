import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
      {
      (store) => {

        const onSendMessageClick = () => {
          store.dispatch(sendMessageActionCreator());
        }
        const onNewMessageChange = body => {
          store.dispatch(updateNewMessageBodyActionCreator(body));
        }

      return   <Dialogs updateNewMessageBody = {onNewMessageChange}
               sendMessage = {onSendMessageClick}
               dialogsPage = {store.getState().dialogsPage}/>
      }
    }

    </StoreContext.Consumer>;
  }

  export default DialogsContainer;

