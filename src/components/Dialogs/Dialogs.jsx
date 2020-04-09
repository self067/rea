import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  return ( <div className={`${s.dialog} ${s.active}`}>
  <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
</div>
)
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {

  let dialogs = [
    {id: 1,  name: "Dimych"},
    {id: 2,  name: "Roma"},
    {id: 3,  name: "Sveta"},
    {id: 4,  name: "Sergey" },
    {id: 5,  name: "Andry"}
  ];

  let messages = [
    { id: 1, message: "gjh sjdf ggggggggg"},
    { id: 2, message: "gjh sjdf ggggggggg"},
    { id: 3, message: "gsdfvsvsjdf ggggj"},
    { id: 4, message: "gsfvrtnjh sjdf ggg"},
    { id: 5, message: "ryngrynrjh sjdf gg"}
    ];

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
  let messagesElements = messages.map( m => <Message message={m.message} id={m.id}/>);


  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>

        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>
);
  }

  export default Dialogs;

