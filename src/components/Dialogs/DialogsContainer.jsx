import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  let dialogsPage = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(addMessageActionCreator());
    props.store.dispatch(updateNewMessageTextActionCreator(''));
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageTextActionCreator(body));
  }

  return <Dialogs 
    onNewMessageChange={onNewMessageChange}
    onSendMessageClick={onSendMessageClick} 
    dialogsPage={dialogsPage} />;
};
export default DialogsContainer;
