import s from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
    <div className={s.item}>{props.name}</div>
  );
};

export default FriendItem;