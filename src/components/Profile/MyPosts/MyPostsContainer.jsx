import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPosts: () => {
      dispatch(addPostActionCreator());
      dispatch(updateNewPostTextActionCreator(''));
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const MyPostsContainer= connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
