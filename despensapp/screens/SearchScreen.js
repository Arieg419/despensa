import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class SearchScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    drawerLabel: 'Search',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="search"
        size={24}
        style={{ color: tintColor }} />
    )
  })

  render() {
    return (
      <View>
        <Text>SearchScreen</Text>
        <Text>SearchScreen</Text>
        <Text>SearchScreen</Text>
        <Text>SearchScreen</Text>
        <Text>SearchScreen</Text>
        <Text>SearchScreen</Text>
        <Text>SearchScreen</Text>
      </View>
    )
  }
}

export default SearchScreen
