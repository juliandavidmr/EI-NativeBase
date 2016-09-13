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
  Navigator,
  TouchableHighlight
} from 'react-native';

import { Container, Header, Title, Button, Icon } from 'native-base';

import {DashBoardView} from './src/components/DashBoardView';
import {ListContactsView} from './src/components/ListContactsView';

var NavigatorBarRouteMapper = {
  LeftButton: function (route, navigator, index) { // El index toma un numero segun la ventana abiert
    return (
      <TouchableHighlight onPress={() => {
        if (index > 0) {
          navigator.pop();
        }
      } }>
        <Text style={{ marginTop: 10, marginLeft: 20, color: '#007AFF' }}>Atrás</Text>
      </TouchableHighlight>
    );
  },
  RightButton: function (route, navigator, index) {
    return null;
  },
  Title: function (route, navigator, index) {
    return (
      <Text style={{ marginTop: 10, color: '#007AFF' }}>
        {route.name}
      </Text>
    );
  }
};

class App extends Component {

  renderScene(route, navigator) {
    switch (route.name) {
      case 'Login':
        return (
          <ListContactsView navigator={navigator} route={route}></ListContactsView>
        );
      case 'Dashboard':
        return (
          <DashBoardView />
        );
    }
  }

  render() {
    return (
      <Navigator
        style={{ backgroundColor: '#fff' }}
        initialRoute={{ name: 'Login' }}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        } }
        navigationBar={
          <Navigator.NavigationBar 
            routeMapper={NavigatorBarRouteMapper} />
        }
        />
    );
  }
}

AppRegistry.registerComponent('App', () => App);
