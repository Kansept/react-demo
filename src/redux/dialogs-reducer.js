const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Vika" },
    { id: 4, name: "Sveta" },
  ],
  messages: [
    { id: 1, message: "Hi", type: "to"},
    { id: 2, message: "Yo", type: "from"},
    { id: 3, message: "Hello", type: "to"},
    { id: 4, message: "World", type: "from"},
  ],
  newMessageText: 'new message text',
};

const dialogsReducer = (state = initialState, action) => {
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