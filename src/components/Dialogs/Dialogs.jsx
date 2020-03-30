import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const DialogItem = (props) => {
  return ( <div className={`${s.dialog} ${s.active}`}>
  <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
</div>
)
}

const Dialogs = (props) => {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name="Dimych" id="1"/>







          <div className={`${s.dialog} ${s.active}`}>
            <NavLink to="/dialogs/1"></NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/2">Homa</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/3">Sergey</NavLink></div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/4">Andrey</NavLink></div>
          <div className={s.dialog}>
            <NavLink to="/dialogs/5">Vovan</NavLink></div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>rferf</div>
          <div className={s.message}>wftwegwegw</div>
          <div className={s.message}>wrgwregwerg</div>
        </div>
      </div>
);
  }

  export default Dialogs;

