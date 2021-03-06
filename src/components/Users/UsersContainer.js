import React from "react";
import { connect } from "react-redux";
import { 
  follow, 
  setCurrentPage, 
  unfollow, 
  getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "./../Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component
{
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render () {
    return <>
      {this.props.isFetching ?  <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             followingInProgress={this.props.followingInProgress}
             follow={this.props.follow} 
             toggleFollowingProgress={this.props.toggleFollowingProgress}
             unfollow={this.props.unfollow} />
    </>
  }
}


const mapStateToProps = (state) => {
  return {
    users: [...state.usersPage.users],
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
}

export default 
compose(
  withAuthRedirect,
  connect( mapStateToProps, { setCurrentPage, getUsers, follow, unfollow, })
)(UsersContainer);

