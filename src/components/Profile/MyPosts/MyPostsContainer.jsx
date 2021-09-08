import MyPosts from './MyPosts';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPosts = () => {
    props.store.dispatch(addPostActionCreator());
    props.store.dispatch(updateNewPostTextActionCreator(''));
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts updateNewPostText={onPostChange} addPosts={addPosts} 
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;

