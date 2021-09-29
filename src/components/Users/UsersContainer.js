import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "./../Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component
{
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setUsersTotalCount(data.totalCount);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      })
  }

  follow = (userId) => {
    usersAPI.follow(userId).then(
      this.props.follow(userId)
    )
  }

  unfollow = (userId) => {
    usersAPI.unfollow(userId).then(
      this.props.unfollow(userId)
    )
  }

  render () {
    return <>
      {this.props.isFetching ?  <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.follow} 
             unfollow={this.unfollow} />
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
  };
}

export default connect(
  mapStateToProps,
  { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching }
)(UsersContainer);
