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

class ESTabBarScreen extends React.Component {

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>Hello</Text>
        <Text style={styles.tabText}>World</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#A1A1A1"
        tintColor="#1194F6"
        barTintColor="white">
        <TabBarIOS.Item
          title="Coverage"
          icon={require('./img/coverage.png')}
          selected={true}
          onPress={() => {

          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Analytics"
          icon={require('./img/analytics.png')}
          selected={false}
          onPress={() => {

          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Reports"
          icon={require('./img/reports.png')}
          selected={false}
          onPress={() => {

          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Notification"
          icon={require('./img/notification.png')}
          selected={false}
          onPress={() => {

          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="More"
          icon={require('./img/more.png')}
          selected={false}
          onPress={() => {

          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
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


module.exports = ESTabBarScreen
