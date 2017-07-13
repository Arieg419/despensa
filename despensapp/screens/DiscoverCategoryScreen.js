import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { discover_recent } from '../data/recent_searches'
import RecipeList from '../components/RecipeList'

class DiscoverCategoryScreen extends Component {
  static navigationOptions = ({ navigation}) => ({
    headerTitle: <Text style={{ fontSize: 20 }}>Discover Category</Text>,
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
      <View style={styles.parentcontainer}>
        <ScrollView style={{flex:1,}}>
          <RecipeList
            data={discover_recent}
            navigatorfunc={this.props}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    parentcontainer: {
        flex: 1,
        backgroundColor: '#fff',
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
