import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    // this.props.setCurrentPage(p);
    // debugger;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1`)
      .then(response => {
        debugger;
        this.props.setUserProfile(response.data);
        // this.props.toggleIsFetching(false);
      });

  }


  render(){
  return (
      <Profile {...this.props} profile={this.props.profile}/>
  );
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);

