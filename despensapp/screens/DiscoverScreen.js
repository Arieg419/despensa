import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'

class DiscoverScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    drawerLabel: 'Discover',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="whatshot"
          size={24}
          style={{ color: tintColor }}
        />
    ),
    header: null,
  })

  render() {
    return (
      <View style={styles.container}>
        <Text>Discover1Screen</Text>
        <Text>DiscoverScreen</Text>
        <Text>DiscoverScreen</Text>
        <Text>DiscoverScreen</Text>
        <Text>DiscoverScreen</Text>
        <Text>DiscoverScreen</Text>
        <Text>DiscoverScreen</Text>
        <Button
          title="Category List"
          onPress={() => { this.props.navigation.navigate('discoverlist') }}
          backgroundColor="#fff"
          color="rgba(0,122,255,1)"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
});

export default DiscoverScreen
