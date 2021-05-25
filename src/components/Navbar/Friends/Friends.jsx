import FriendItem from '../FriendItem/FriendItem';
import s from './Friends.module.css';

const Friends = (props) => {
  let FriendsElements = props.friends.map((friend) => <FriendItem id={friend.id} name={friend.name} />);
  return (
    <div>
      <div class={s.title}>Friends</div>
      <div class={s.friends}>
        {FriendsElements}
      </div>
    </div> 
  );
}

export default Friends;