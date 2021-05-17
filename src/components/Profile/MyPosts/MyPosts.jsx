import s from './MyPosts.module.css';
import Post from './../Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.posts.map((post) => <Post id={post.id} message={post.message} like={post.like} />) }
      </div>
    </div>
  );
};

export default MyPosts;

