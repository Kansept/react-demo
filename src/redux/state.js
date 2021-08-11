let rerenderEntireTree = () => {
  console.log('State changed')
}

let state = {
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
};

export let addMessage = () => {
  let newMessage = {
      id: 5,
      message: state.dialogsPage.newMessageText,
      type: "from"
    };
  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
