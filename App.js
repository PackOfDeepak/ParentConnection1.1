import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import MyStack from './navigation';

    
  

export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
    <MyStack/>
    </NavigationContainer>
  
      
    
);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
