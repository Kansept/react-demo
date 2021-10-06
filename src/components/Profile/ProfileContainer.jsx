import React from "react";
import { connect } from "react-redux";
import { setUserProfile, getProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Profile from './Profile';
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} 
        profile={this.props.profile} 
        status={this.props.status} 
        updateStatus={this.props.updateStatus} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
  withAuthRedirect,
  withRouter,
)
(ProfileContainer);
