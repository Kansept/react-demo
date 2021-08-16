import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

  _callSubscriber() {
    console.log('State changed')
  },

  _state: {
    profilePage: {
      posts: [
        { id: 1, like: 10, message: "Hi" },
        { id: 2, like: 14, message: "Yo" },
        { id: 3, like: 7, message: "Hello" },
        { id: 4, like: 6, message: "World" },
      ],
      newPostText: 'new post text'
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Vika'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Masha'},
      ]
    }
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

window.store = store;

export default store;