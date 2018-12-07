import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import styles from './Dashboard.styles'
export default class Dashboard extends Component {
static navigationOptions = { header: null }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Dashboard!</Text>
        <Button
          title="Go Back to Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}
