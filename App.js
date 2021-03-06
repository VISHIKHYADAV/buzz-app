import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import FacebookScreen from './Screens/Fb'; 
import InstagramScreen from './Screens/In';

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen},
})
const AppContainer=createAppContainer(TabNavigator);
export default class App extends React.Component{
  render(){
    return(
  <AppContainer/>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
