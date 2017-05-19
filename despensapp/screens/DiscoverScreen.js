import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ListView,
  Image,
  Platform
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'

import { cities } from '../data/recent_searches'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

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
  })

  state = {
    datasource: ds.cloneWithRows(cities)
  }

  cityBox(val){
    return(
      <Image source={val.img} resizeMode="stretch" style={styles.recentlySearchedItem}>
        <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontSize:30, fontWeight:'700'}}>
          {val.city_name}
        </Text>
        <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:14, fontWeight:'600'}}>
          {val.date_from} - {val.date_to}
        </Text>
      </Image>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1,}}>
          <View style={styles.container}>
            <Image
              source = {require('../assets/img/logoWhite.png')}
              resizeMode="contain"
              style={styles.hero}
            />
            <Text style={styles.main}>
              Welcome to Despensa!
            </Text>
            <TouchableOpacity style={styles.heroButton}>
              <Text style={{color:'#fff', textAlign:'center', fontWeight:'600'}}>
                Discover recipes
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.discoverRows}>
            <Text style={styles.title}>Trending Recipes</Text>
            <ListView
            dataSource = {this.state.datasource}
            renderRow={(rowData) => this.cityBox(rowData)}
            horizontal = {true}
            />
          </View>
          <View style={styles.discoverRows}>
            <Text style={styles.title}>Recent Searches</Text>
            <ListView
            dataSource = {this.state.datasource}
            renderRow={(rowData) => this.cityBox(rowData)}
            horizontal = {true}
            />
          </View>
          <View style={styles.discoverRows}>
            <Text style={styles.title}>New Recipes</Text>
            <ListView
            dataSource = {this.state.datasource}
            renderRow={(rowData) => this.cityBox(rowData)}
            horizontal = {true}
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.searchFAB}>
          <MaterialIcons
            name="search"
            size={22}
            color="#fff"
            onPress={() => { this.props.navigation.navigate('discoverlist') }}
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
  hero: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginTop: 65,
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
  main: {
    fontSize: 25,
    textAlign: 'left',
    color:'#fff',
    fontWeight:'600',
    width:200,
    margin: 10,
    marginLeft:20,
    marginTop:30.
  },
  discoverRows: {
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderBottomColor:'#d3d3d3',
  },
  title: {
    fontWeight:'400',
    fontSize:20,
    color:'#333',
    margin:20,
    marginBottom:15
  },
  recentlySearchedItem: {
    width:330,
    height:220,
    margin:5,
    marginBottom:30,
    justifyContent:'center',
    alignItems:'center'
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
