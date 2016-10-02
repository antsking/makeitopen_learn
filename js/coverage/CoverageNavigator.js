/**
 * Created by Evan on 01/10/2016.
 * @flow
 */
'use strict'

import React, { Component } from 'react';
import { Text,Navigator,StatusBar,StyleSheet,TouchableOpacity,Image } from 'react-native';
import CoverageListScreen from './CoverageListScreen'

const filterButtonClicked = () => {

};

const navigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },

  RightButton(route, navigator, index, navState) {
  	if (index === 0) {
  	  return (
        <TouchableOpacity
          onPress={filterButtonClicked}
          style={styles.navBarRightButton}>
          <Image
            style={styles.filterButton}
            source={require('./img/filter.png')}
          />
        </TouchableOpacity>
      );
  	}
  },

  Title(route, navigator, index, navState) {
    if (index === 0) {
      return <Text style={styles.navBarTitle}>Coverage</Text>
    }
  }
}

class CoverageNavigator extends Component {
  constructor(props){
      super(props)
  }

  componentWillMount(){
    StatusBar.setBarStyle('default',true);
  }

  componentWillReceiveProps(nextProps){
    let rootNav = this.refs.rootNavigator;

  }

  _renderScene(route,navigator){
    if (route.index === 0){
      return <CoverageListScreen/>
    }
  }

  render() {
      return(
        <Navigator
            ref='rootNavigator'
            initialRoute={{title: 'Coverage List Screen', index: 0}}
            renderScene={this._renderScene.bind(this)}
            navigationBar={
              <Navigator.NavigationBar
                routeMapper={navigationBarRouteMapper}
                style={{backgroundColor:'#F7F7F7'}}
                configureScene={(route, routeStack) =>
                  Navigator.SceneConfigs.PushFromRight}/>
              }/>
      )
  }
};

const styles = StyleSheet.create({
    navBarTitle: {
      fontWeight:'bold',
      fontSize:18,
      paddingVertical:10
    },
    navBarRightButton: {
      paddingRight: 16,
      paddingVertical:10
    },
    navBarLeftButton: {
      paddingLeft: 16,
      paddingVertical:10
    },
    filterButton:{
      width:20,
      height:20

    },

});


module.exports = CoverageNavigator
