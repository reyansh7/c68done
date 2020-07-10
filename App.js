import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadScreen from './Screens/ReadScreen';
import WriteScreen from './Screens/WriteScreen';

export default class App extends React.Component {
  render(){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <AppContainer />
        </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read: {screen: ReadScreen},
  Write: {screen: WriteScreen},
});

const AppContainer =  createAppContainer(TabNavigator);


