import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

import { cities } from '../data/recent_searches'
import DiscoveryListRow from '../components/DiscoveryListRow'

class DiscoverCategoryScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerTitle: <Text style={{ fontSize: 20 }}>Discover Categories</Text>
  })

  render() {
    return (
      <View style={styles.parentcontainer}>
        <ScrollView style={{flex:1,}}>
          <Card
            image={require('../assets/img/image11.jpg')}
          >
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
          </Card>
          <Button
            title="Specific reciper"
            onPress={() => { this.props.navigation.navigate('discoverrecipe', {routeNaming: "Rasperry Pie"}) }}
            backgroundColor="#fff"
            color="rgba(0,122,255,1)"
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    parentcontainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    },
    halfHeight: {
        flex: 2,
        backgroundColor: '#FF3366'
    },
    quarterHeight: {
        flex: 1,
        backgroundColor: '#000'
    },
    title: {
      fontWeight:'400',
      fontSize:20,
      color:'#333',
      margin:20,
      marginBottom:15
    },
    hero: {
      width:380,
      height:260,
      justifyContent:'center',
      alignItems:'center',
    }
});

export default DiscoverCategoryScreen
