import s from './MyPosts.module.css';
import Post from './../Post/Post';

const MyPosts = () => {
  let postData = [
    { id: 1, like: 10, message: "Hi" },
    { id: 2, like: 14, message: "Yo" },
    { id: 3, like: 7, message: "Hello" },
    { id: 4, like: 6, message: "World" },
  ];

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
        {postData.map((post) => <Post id={post.id} message={post.message} like={post.like} />) }
      </div>
    </div>
  );
};

export default MyPosts;

