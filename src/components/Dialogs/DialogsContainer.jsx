import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
