/**
 * Created by evansu on 26/09/2016.
 */
import React, {Component} from 'react'
import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import {setUserName,setUserPassword,userLogin} from '../actions/login'
import {bindActionCreators} from 'redux';

class LoginScreenContainer extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <LoginScreen
        userLogin={this.props.userLogin}
        username={this.props.username}
        password={this.props.password}
        setUserName={this.props.setUserName}
        setUserPassword={this.props.setUserPassword}
        >
      </LoginScreen>
    );
  }
}
const stateToProps = (state) => {
  return {
    username:state.user.username,
    password:state.user.password
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    userLogin,setUserName,setUserPassword
    },dispatch)
}

export default connect(stateToProps,dispatchToProps)(LoginScreenContainer);
