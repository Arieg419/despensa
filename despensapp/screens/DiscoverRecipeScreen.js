import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Recipe from '../components/Recipe'

class DiscoverRecipeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={{ fontSize: 20 }}>{navigation.state.params["routeNaming"]}</Text>
  })

  render() {
    return (
      <View>
        <Recipe />
      </View>
    )
  }
}

export default DiscoverRecipeScreen
