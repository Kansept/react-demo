
import React from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from "./Dialogs.module.css";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message id={message.id} message={message.message} type={message.type} />
  ));

  let newMessageElement = state.newMessageText;
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
    props.dispatch(updateNewMessageTextActionCreator(''));
  };

  let updateNewMessageText = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(body));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
          <textarea onChange={updateNewMessageText} value={newMessageElement} />
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
