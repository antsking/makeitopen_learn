/**
 * Created by Evan on 30/09/2016.
 * @flow
 */
'use strict'

import React, {Component} from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';
import CoverageNavigator from '../coverage/CoverageNavigator';
import {
  COVERAGE_TAB,
  ANALYTICS_TAB,
  REPORTS_TAB,
  NOTIFICATION_TAB,
  MORE_TAB,
  switchTab
} from '../actions/navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'

class ESTabBarScreen extends React.Component {

  _renderCoverageSection(){
    return <CoverageNavigator/>
  }

  _renderContent = (color: string) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>

      </View>
    );
  };

  _onTabSelect(tab) {
    if (this.props.tab !== tab) {
      this.props.switchTab(tab);
    }
  }


  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#A1A1A1"
        tintColor="#1194F6"
        barTintColor="white">
        <TabBarIOS.Item
          title="Coverage"
          icon={require('./img/coverage.png')}
          selected={this.props.tab === COVERAGE_TAB}
          onPress={this._onTabSelect.bind(this, COVERAGE_TAB)}>
          {this._renderCoverageSection()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Analytics"
          icon={require('./img/analytics.png')}
          selected={this.props.tab === ANALYTICS_TAB}
          onPress={this._onTabSelect.bind(this, ANALYTICS_TAB)}>
          {this._renderContent('#414A8C')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Reports"
          icon={require('./img/reports.png')}
          selected={this.props.tab === REPORTS_TAB}
          onPress={this._onTabSelect.bind(this, REPORTS_TAB)}>
          {this._renderContent('#414A8C')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Notification"
          icon={require('./img/notification.png')}
          selected={this.props.tab === NOTIFICATION_TAB}
          onPress={this._onTabSelect.bind(this, NOTIFICATION_TAB)}>
          {this._renderContent('#414A8C')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="More"
          icon={require('./img/more.png')}
          selected={this.props.tab === MORE_TAB}
          onPress={this._onTabSelect.bind(this, MORE_TAB)}>
          {this._renderContent('#414A8C')}
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

ESTabBarScreen.propTypes = {
    tab:React.PropTypes.string,
    switchTab:React.PropTypes.func
};


const stateToProps = (state) => {
  return {
    tab:state.navigation.tab
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    switchTab
    },dispatch)
}

module.exports = connect(stateToProps,dispatchToProps)(ESTabBarScreen)
