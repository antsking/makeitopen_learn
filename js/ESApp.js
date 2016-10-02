/**
 * Created by Evan on 01/10/2016.
 * @flow
 */
'use strict'

import React, { Component } from 'react';
import LoginScreen from './login/LoginScreen';
import ESTabBarScreen from './main/ESTabBarScreen'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'

class ESApp extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <ESTabBarScreen/>
    }else{
      return <LoginScreen/>
    }

  }
};
ESApp.propTypes = {
    isLoggedIn:React.PropTypes.bool
};

const stateToProps = (state) => {
  return {
    isLoggedIn:state.user.isLoggedIn
  }
}
module.exports = connect(stateToProps)(ESApp)
