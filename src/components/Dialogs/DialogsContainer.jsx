import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;

    const onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  }
  const onNewMessageChange = body => {
      props.store.dispatch(updateNewMessageBodyActionCreator(body));
  }

    return (<Dialogs updateNewMessageBody = {onNewMessageChange}
                     sendMessage = {onSendMessageClick}
                     dialogsPage = {state}/>);
  }

  export default DialogsContainer;

