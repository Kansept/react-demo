import React from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message id={message.id} message={message.message} type={message.type} />
  ));

  let newMessageElement = props.dialogsPage.newMessageText;
  let addMessage = () => {
    props.onSendMessageClick();
  };

  let updateNewMessageText = (e) => {
    let body = e.target.value;
    props.onNewMessageChange(body);
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
