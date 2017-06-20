// var React = require('react');
// var {Text, View, Button, AppRegistry} = require('react-native');

import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
};

const App  = () => {

  return (
    <View>
      <Text> Gerador de Números Randômicos</Text>
      <Button
        title="Gerar um Número Randomico"
        onPress={
          geraNumeroAleatorio
        }/>
    </View>
    );
};

AppRegistry.registerComponent('app1', () =>  App);