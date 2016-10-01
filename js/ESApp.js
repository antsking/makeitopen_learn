import React, { Component } from 'react';
import { Text,Navigator } from 'react-native';
import LoginScreen from './login/LoginScreen';
import ESTabBarScreen from './main/ESTabBarScreen'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'

const navigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },

  RightButton(route, navigator, index, navState) {
  	return null;
  },

  Title(route, navigator, index, navState) {
    return null;
  }
}


class ESApp extends Component {
  componentWillReceiveProps(nextProps){
    let rootNav = this.refs.rootNavigator;
    if (nextProps.isLoggedIn) {
      rootNav.push({
                title: 'Main Screen ',
                index: 1,
              });
    }
  }
  _renderScene(route,navigator){
    if (route.index === 0){
      return <LoginScreen/>
    }else if (route.index === 1) {
      return <ESTabBarScreen/>
    }
  }

  render() {
    let navBarBackgroundColor = this.props.isLoggedIn ? {backgroundColor: 'gray'} : {backgroundColor: 'transparent'};
    return (
      <Navigator
        ref='rootNavigator'
        initialRoute={{title: 'Login Screen', index: 0}}
        renderScene={this._renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={navigationBarRouteMapper}
            style={navBarBackgroundColor}
            configureScene={(route, routeStack) =>
              Navigator.SceneConfigs.PushFromRight}
              />
          }
          />
      )
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
