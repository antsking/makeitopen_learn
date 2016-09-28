/**
 * Created by evansu on 26/09/2016.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import {loginAction} from '../actions/login'
import {bindActionCreators} from 'redux';

class LoginScreenContainer extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginScreen
        isLoggedIn={this.props.userStatus}
        onLoginButtonClick={this.props.loginAction}
        >
      </LoginScreen>
    );
  }
}
const stateToProps = (state) => {
  return {
    userStatus: state.user.isLoggedIn,
    count:state.user.count
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginAction:loginAction
    },dispatch)
}

export default connect(stateToProps,dispatchToProps)(LoginScreenContainer);
