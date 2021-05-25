let state = {
  profilePage: {
    posts: [
      { id: 1, like: 10, message: "Hi" },
      { id: 2, like: 14, message: "Yo" },
      { id: 3, like: 7, message: "Hello" },
      { id: 4, like: 6, message: "World" },
    ],
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
    ]
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Vika'},
      {id: 2, name: 'Sveta'},
      {id: 3, name: 'Masha'},
    ]
  }
};

export default state;