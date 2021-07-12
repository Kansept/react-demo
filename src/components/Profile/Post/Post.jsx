import s from './Post.module.css';

/**
 * @param {object} props 
 * @param {string} props.message
 * @param {number} props.like
 * @returns 
 */
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="" />
      {props.message}
      <div>Like {props.like.toString()}</div>
    </div>
  );
}

export default Post;