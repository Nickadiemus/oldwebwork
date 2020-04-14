//main imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavigationBar from '../components/NavigationBar';

//secondary import(s)
import { addFlashMessages } from '../actions/addFlashMessages.js';
import SignUp from '../components/SignUp';
import {userSignupRequest} from '../signupActions.js';


class NewUser extends Component{

  render(){
    const {userSignupRequest, addFlashMessages} = this.props
    return(
      <div>
        <NavigationBar />
        <SignUp userSignupRequest = {userSignupRequest} addFlashMessage = {addFlashMessages}/>
      </div>
    )
  }
}

//Sign up Props passed up
NewUser.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessages: React.PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest, addFlashMessages})(NewUser);
