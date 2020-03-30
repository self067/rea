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
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name="Dimych" id="1"/>
          <DialogItem name="Roma" id="2"/>
          <DialogItem name="Sveta" id="3"/>
          <DialogItem name="Sergey" id="4"/>
          <DialogItem name="Andry" id="5"/>
        </div>

        <div className={s.messages}>
          <Message message="gjh sjdf gggggggggj"/>
          <Message message="gsdfvsvsjdf ggggj"/>
          <Message message="gsfvrtnjh sjdf gggsfdvsgggj"/>
          <Message message="ryngrynrjh sjdf gggggggggj"/>
          <Message message="y,iyui,y,gjhyi, sjdgggj"/>
        </div>
      </div>
);
  }

  export default Dialogs;

