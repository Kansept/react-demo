import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import Preloader from "./../Preloader/Preloader";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
