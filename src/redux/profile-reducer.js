import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
  posts: [
    { id: 1, like: 10, message: "Hi" },
    { id: 2, like: 14, message: "Yo" },
    { id: 3, like: 7, message: "Hello" },
    { id: 4, like: 6, message: "World" },
  ],
  newPostText: 'new post text',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {
          id: 5,
          message: state.newPostText,
          like: 0
        }],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state, 
        profile: action.profile,
      }
    }
    case SET_STATUS: {
      return {
        ...state, 
        status: action.status,
      }
    }
    default:
      break;
  }

  return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(data => {
    dispatch(setStatus(data));
  });
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(data => {
    dispatch(setStatus(status));
  });
}

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then(data => {
    dispatch(setUserProfile(data));
  });
}
export default profileReducer;