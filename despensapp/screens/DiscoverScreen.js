import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ListView,
  FlatList,
  Image,
  Platform
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'

import {
  discover_trending,
  discover_recent,
  discover_new
} from '../data/recent_searches'
import DiscoveryRow from '../components/DiscoveryRow'

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
    borderBottomWidth: 0,
    headerRight: <Button title="Open drawer" onPress={() => navigation.navigate('DrawerOpen')}  />
  })

  discoveryRow(item){
    return(
      <Image source={item.img} resizeMode="stretch" style={styles.recentlySearchedItem}>
        <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontSize:30, fontWeight:'700'}}>
          {item.city_name}
        </Text>
        <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:14, fontWeight:'600'}}>
          {item.date_from} - {item.date_to}
        </Text>
      </Image>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1,}}>
          <View style={styles.container}>
            <TouchableOpacity style={{margin: 20, marginTop: 30 , padding: 0, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <MaterialIcons
                name="reorder"
                size={26}
                color="#fff"
                onPress={() => { this.props.navigation.navigate('DrawerOpen') }}
                />
            </TouchableOpacity>
            <Image
              source = {require('../assets/img/logoWhite.png')}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.welcomeText}>
              Welcome to Despensa!
            </Text>
            <TouchableOpacity
              style={styles.heroButton}
              onPress={() => { this.props.navigation.navigate('discovercategories') }}
              >
              <Text style={{color:'#fff', textAlign:'center', fontWeight:'600'}}>
                Discover recipes
              </Text>
            </TouchableOpacity>
          </View>
          <DiscoveryRow
            data={discover_trending}
            title={"What's Trending"}
          />
          <DiscoveryRow
            data={discover_recent}
            title={"Recent Searches"}
          />
          <DiscoveryRow
            data={discover_new}
            title={"New Recipes"}
          />
        </ScrollView>
        <TouchableOpacity style={styles.searchFAB}>
          <MaterialIcons
            name="search"
            size={22}
            color="#fff"
            onPress={() => { this.props.navigation.navigate('searchscreen') }}
            />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff585b',
    height:400,
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginTop: 0,
    padding: 0
  },
  heroButton: {
    margin:10,
    marginTop:60,
    marginLeft:20,
    padding:10,
    borderWidth:2,
    borderColor:"#fff",
    borderRadius:18,
    width:150,
  },
  welcomeText: {
    fontSize: 25,
    textAlign: 'left',
    color:'#fff',
    fontWeight:'600',
    width:200,
    margin: 10,
    marginLeft:20,
    marginTop:30,
  },
  searchFAB: {
    width:60,
    borderWidth:3,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    height:60,
    backgroundColor:'#ff585b',
    borderRadius:30,
    position:'absolute',
    bottom:20,
    right:20
  }
});

export default DiscoverScreen
