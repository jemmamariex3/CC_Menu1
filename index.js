import React, {Component} from 'react'
import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation'
import stackScreens from './assets/stackScreens'

const App = StackNavigator(

    stackScreens,
    {
    navigationOptions: {
        title: "Welcome!"
    },
})
module.exports = App

AppRegistry.registerComponent('LorenaMenu1', () => App)