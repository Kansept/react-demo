const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {id: 1, photoUrl: '', followed: false, fullName: 'Vladimir', status: 'I am a boss', location: {city: 'SPB', country: 'Russia'}},
    {id: 2, photoUrl: '', followed: true, fullName: 'Sasha', status: 'I am a boss', location: {city: 'Moskow', country: 'Russia'}},
    {id: 3, photoUrl: '', followed: true, fullName: 'Andrew', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true};
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state, 
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false};
          }
          return u;
        })
      };

    case SET_USERS: 
      return {...state, users: [...state.users, action.users]}

    default:
      break;
  }

  return state;
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
