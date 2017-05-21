import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DiscoverRecipeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={{ fontSize: 20 }}>{navigation.state.params["routeNaming"]}</Text>
  })

  render() {
    return (
      <View>
        <Text>DiscoverRecipeScreen</Text>
        <Text>DiscoverRecipeScreen</Text>
        <Text>DiscoverRecipeScreen</Text>
        <Text>DiscoverRecipeScreen</Text>
        <Text>DiscoverRecipeScreen</Text>
        <Text>DiscoverRecipeScreen</Text>
        <Text>DiscoverRecipeScreen</Text>
      </View>
    )
  }
}

export default DiscoverRecipeScreen
