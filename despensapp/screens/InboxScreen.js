import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class InboxScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    drawerLabel: 'Inbox',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="mail"
        size={24}
        style={{ color: tintColor }} />
    )
  })

  render() {
    return (
      <View>
        <Text>InboxScreen</Text>
        <Text>InboxScreen</Text>
        <Text>InboxScreen</Text>
        <Text>InboxScreen</Text>
        <Text>InboxScreen</Text>
        <Text>InboxScreen</Text>
        <Text>InboxScreen</Text>
      </View>
    )
  }
}

export default InboxScreen
