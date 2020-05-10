import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends  React.Component{
  componentDidMount() {

    // this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
      {withCredentials: true})
      .then(response => {
        if(response.data.resultCode === 0) {
          const {id,email,login} = response.data.data;
          this.props.setAuthUserData(id,email,login);
        }
        // debugger;
        // this.props.setUsers(response.data.items);
        // this.props.setTotalUsersCount( response.data.totalCount);
        // this.props.toggleIsFetching(false);

      });

  }





  render() {
  return (
    <Header {...this.props} />
  );
  }
  }

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});
  export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);

