
import React from "react";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialoogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messages.map((message) => (
    <Message id={message.id} message={message.message} type={message.type} />
  ));

  let newMessageElement = React.createRef();
  let addMessage = () => {
    alert(newMessageElement.current.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialoogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
        <textarea ref={newMessageElement}></textarea>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
