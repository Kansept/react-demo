import s from './MyPosts.module.css';
import Post from './../Post/Post';
import React from 'react';

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let onAddPosts = () => {
    props.addPosts();
  };

  let onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        <div>
          <button onClick={onAddPosts}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.posts.map((post) => <Post key={post.id} message={post.message} like={post.like} />) }
      </div>
    </div>
  );
};

export default MyPosts;

