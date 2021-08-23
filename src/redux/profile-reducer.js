const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, like: 10, message: "Hi" },
    { id: 2, like: 14, message: "Yo" },
    { id: 3, like: 7, message: "Hello" },
    { id: 4, like: 6, message: "World" },
  ],
  newPostText: 'new post text'
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0
      };
      state.posts.push(newPost);
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      break;
    default:
      break;
  }

  return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;