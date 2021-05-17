import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Vika" },
    { id: 4, name: "Sveta" },
  ];
  let dialoogsElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "Hello" },
    { id: 4, message: "World" },
  ];
  let messagesElements = messageData.map((message) => (
    <Message id={message.id} message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialoogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};
export default Dialogs;
