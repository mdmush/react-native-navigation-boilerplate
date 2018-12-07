import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { View, StatusBar } from 'react-native'
// screens

import Home from './src/screens/Home/Home'
import Dashboard from './src/screens/Dashboard/Dashboard'

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Dashboard: Dashboard
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
        <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      </View>
    )
  }
}
