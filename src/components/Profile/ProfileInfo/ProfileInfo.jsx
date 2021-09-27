const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src={props.profile.photos.large} alt="banner" />
      </div>
      <div>
        {props.profile.fullName}
      </div>
      <div>
        {props.profile.aboutMe}
      </div>
      <div>Статус: {props.profile.lookingForAJob ? 'Да' : 'Нет'} ({props.profile.lookingForAJobDescription})</div>
    </div>
  );
}

export default ProfileInfo;
