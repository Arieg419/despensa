import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Recipe from '../components/Recipe'

class DiscoverRecipeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={{ fontSize: 20 }}>{navigation.state.params["routeNaming"]}</Text>,
    headerRight: <TouchableOpacity style={{ marginRight: 20 }}>
      <MaterialIcons
        name="reorder"
        size={26}
        color='#ff585b'
        onPress={() => { navigation.navigate('DrawerOpen') }}
        />
    </TouchableOpacity>
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
