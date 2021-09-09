import MyPosts from './MyPosts';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {


  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPosts = () => {
          store.dispatch(addPostActionCreator());
          store.dispatch(updateNewPostTextActionCreator(''));
        };
        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return <MyPosts updateNewPostText={onPostChange} addPosts={addPosts} 
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
        />
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;

