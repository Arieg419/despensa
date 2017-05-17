import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class AskScreen extends Component {

  static navigationOptions = ({ navigation}) => ({
    drawerLabel: 'Ask',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="create"
        size={24}
        style={{ color: tintColor }} />
    )
  })

  render() {
    return (
      <View>
        <Text>AskScreen</Text>
        <Text>AskScreen</Text>
        <Text>AskScreen</Text>
        <Text>AskScreen</Text>
        <Text>AskScreen</Text>
        <Text>AskScreen</Text>
        <Text>AskScreen</Text>
      </View>
    )
  }
}


export default AskScreen
