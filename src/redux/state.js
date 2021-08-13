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

  addMessage() {
    let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
        type: "from"
      };
    this._state.dialogsPage.messages.push(newMessage);
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },


  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber(this._state);
    }
  }
};

window.store = store;

export default store;