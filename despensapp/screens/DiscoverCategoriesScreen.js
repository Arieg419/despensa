import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import { Button } from 'react-native-elements'

import { cities } from '../data/recent_searches'
import DiscoveryListRow from '../components/DiscoveryListRow'

class DiscoverListScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerTitle: <Text style={{ fontSize: 20 }}>Discover Categories</Text>
  })

  render() {
    return (
      <View style={styles.parentcontainer}>
        <ScrollView style={{flex:1,}}>
          <View style={styles.container}>
            <Image source={require("../assets/img/image10.jpg")} resizeMode="stretch" style={styles.hero}>
              <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontSize:30, fontWeight:'700'}}>
                Discover By Theme
              </Text>
              <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:14, fontWeight:'600'}}>
                Select any category
              </Text>
            </Image>
          </View>
          <DiscoveryListRow
            data={cities}
            title={"General Recipes"}
          />
        <DiscoveryListRow
            data={cities}
            title={"Sweets Recipes"}
          />
        <DiscoveryListRow
            data={cities}
            title={"Vegetable Recipes"}
          />
        <DiscoveryListRow
            data={cities}
            title={"Fruit Recipes"}
          />
          <Button
            title="Specific reciper"
            onPress={() => { this.props.navigation.navigate('discovercategory', {routeNaming: "Rasperry Pie"}) }}
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
      width:800,
      height:260,
      justifyContent:'center',
      alignItems:'center',
    }
});

export default DiscoverListScreen
