import React from 'react';
import {connect} from 'react-redux';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from './Users';
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component{

  getUsers = () => {
    // if( this.props.users.length === 0)
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        // debugger;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount( response.data.totalCount);
        this.props.toggleIsFetching(false);

      });
  }

  componentDidMount() {
    this.getUsers();

  }

  onPageChanged = (p) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then(response => {
        // debugger;
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);

      });


  }

  render() {
    // debugger;
    return <>
      { this.props.isFetching? <Preloader /> : null }
      <Users totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unfollow={this.props.unfollow}
                  // isFetching={this.}
    /></>;

  }
}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));

    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));

    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));

    },
    setTotalUsersCount: (usersCount) => {
      dispatch(setTotalUsersCountAC(usersCount));

    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));

    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
