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
        isUserLoggedIn={this.props.userStatus}
        onLoginButtonClick={this.props.loginAction}>
      </LoginScreen>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userStatus: state.isLoggedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginAction
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreenContainer);
