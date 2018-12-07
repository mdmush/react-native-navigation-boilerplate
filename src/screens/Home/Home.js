import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import styles from './Home.styles'
export default class Home extends Component {
  static navigationOptions = { header: null }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home!</Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    )
  }
}
