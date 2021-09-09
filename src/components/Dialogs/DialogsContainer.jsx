import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

  return <StoreContext.Consumer>
    {(store) => {
      let dialogsPage = store.getState().dialogsPage;
      let onSendMessageClick = () => {
        store.dispatch(addMessageActionCreator());
        store.dispatch(updateNewMessageTextActionCreator(''));
      };
      let onNewMessageChange = (body) => {
        store.dispatch(updateNewMessageTextActionCreator(body));
      }
      return <Dialogs 
        onNewMessageChange={onNewMessageChange}
        onSendMessageClick={onSendMessageClick} 
        dialogsPage={dialogsPage} />;
    }
  }
  </StoreContext.Consumer>
};
export default DialogsContainer;
