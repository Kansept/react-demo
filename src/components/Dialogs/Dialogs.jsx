
import React from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialoogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message id={message.id} message={message.message} type={message.type} />
  ));

  let newMessageElement = React.createRef();
  let addMessage = () => {
      props.addMessage();
      props.updateNewMessageText('');
  };

  let updateNewMessageText = () => {
      props.updateNewMessageText(newMessageElement.current.value);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialoogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
          <textarea ref={newMessageElement} onChange={updateNewMessageText} value={props.dialogsPage.newMessageText} />
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
