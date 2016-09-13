'use strict'

import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Alert,
  Navigator
} from 'react-native';

export class ListContactsView extends Component {

  onLogin() {
    console.log('Hola');

    Alert.alert(
      'Acceso',
      'Te has logueado',
      [
        {
          text: 'Aceptar',
          onPress: (this.aceptar.bind(this))
        }, {
          text: 'Cancelar',
          onPress: (this.cancelar.bind(this))
        }        
      ]
    );
  }

  aceptar() {
    console.log('Aceptado');

    this.props.navigator.push({
      title: 'DashBoard',
      name: 'DashBoard',
      passProps: {}
    });
  }

  cancelar() {
    console.log('Cancelar');
  }

  render() {
    return (
      <View>
        <Text>Componente de DashBoard</Text>

        <TouchableHighlight onPress={(this.onLogin.bind(this)) } style={styles.boton}>
          <Text style={styles.textBoton}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
    width: 300,
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1
  },
  textBoton: {
    color: 'white'
  }
});