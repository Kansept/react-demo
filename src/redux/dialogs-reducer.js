const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
          id: 5,
          message: state.newMessageText,
          type: "from"
        };
      state.messages.push(newMessage);
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      break;
    default:
      break;
  }

  return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});

export default dialogsReducer;