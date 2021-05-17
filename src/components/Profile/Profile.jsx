import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = () => {
  let posts = [
    { id: 1, like: 10, message: "Hi" },
    { id: 2, like: 14, message: "Yo" },
    { id: 3, like: 7, message: "Hello" },
    { id: 4, like: 6, message: "World" },
  ];

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
}

export default Profile;
