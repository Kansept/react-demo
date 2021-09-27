import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import Preloader from "./../Preloader/Preloader";

const Profile = (props) => {
  console.log(props);
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
