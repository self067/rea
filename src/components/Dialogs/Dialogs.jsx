import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    const state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
  let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id}/>);
  let newMessageBody = state.newMessageBody;
  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageActionCreator());
  }
  const onNewMessageChange = e => {
      // const body = e.target.value;
      props.store.dispatch(updateNewMessageBodyActionCreator(e.target.value));
  }

    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>

        <div className={s.messages}>
            <div>{messagesElements}</div>
            <div><textarea value={newMessageBody}
                           onChange={onNewMessageChange}
                           name="" id="" cols="20" rows="2">Enter your message</textarea></div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
      </div>
);
  }

  export default Dialogs;

