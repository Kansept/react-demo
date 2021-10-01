import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      dispatch(addMessageActionCreator());
      dispatch(updateNewMessageTextActionCreator(''));
    },
    onNewMessageChange: (body) => {
      dispatch(updateNewMessageTextActionCreator(body));
    }
  }
}

let mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});
let AuthRedirectComponent = withAuthRedirect(Dialogs);
AuthRedirectComponent = connect( mapStateToPropsRedirect )(AuthRedirectComponent);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
