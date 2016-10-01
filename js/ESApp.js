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

  }
  _renderScene(route,navigator){
    if (route.index === 0){
      return <ESTabBarScreen/>
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return(
        <Navigator
            ref='rootNavigator'
            initialRoute={{title: 'Main Screen', index: 0}}
            renderScene={this._renderScene.bind(this)}
            navigationBar={
              <Navigator.NavigationBar
                routeMapper={navigationBarRouteMapper}
                style={{backgroundColor:'#F7F7F7'}}
                configureScene={(route, routeStack) =>
                  Navigator.SceneConfigs.PushFromRight}/>
              }/>
      )
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
