import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

class DiscoverListScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerTitle: <Text style={{ fontSize: 20 }}>Discover Categories</Text>
  })

  render() {
    return (
      <View>
        <Text>DiscoverListScreen</Text>
        <Text>DiscoverListScreen</Text>
        <Text>DiscoverListScreen</Text>
        <Text>DiscoverListScreen</Text>
        <Text>DiscoverListScreen</Text>
        <Text>DiscoverListScreen</Text>
        <Text>DiscoverListScreen</Text>
        <Button
          title="Specific reciper"
          onPress={() => { this.props.navigation.navigate('discoverrecipe') }}
          backgroundColor="#fff"
          color="rgba(0,122,255,1)"
        />
      </View>
    )
  }
}

export default DiscoverListScreen
