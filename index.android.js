/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight
} from 'react-native';

import { ListContactsView } from './src/components/ListContactsView';
import { DashBoardView }from './src/components/DashBoardView';

class App extends Component {
  render() {
    return (
      <View>
        <ListContactsView />

        <DashBoardView />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
