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

var cities = [{"id":1,"city_name":"Três Pontas","date_from":"9/21/2015","date_to":"1/3/2016"},
{"id":2,"city_name":"Dongxi","date_from":"10/30/2015","date_to":"2/28/2016"},
{"id":3,"city_name":"Gaoqiao","date_from":"4/28/2016","date_to":"9/10/2016"},
{"id":4,"city_name":"Redon","date_from":"10/11/2015","date_to":"7/27/2016"},
{"id":5,"city_name":"Rzepiennik Strzyżewski","date_from":"3/16/2016","date_to":"6/27/2016"},
{"id":6,"city_name":"Tugulym","date_from":"10/9/2015","date_to":"6/21/2016"},
{"id":7,"city_name":"Dagou","date_from":"7/17/2016","date_to":"9/24/2016"},
{"id":8,"city_name":"San Rafael","date_from":"2/5/2016","date_to":"1/18/2016"},
{"id":9,"city_name":"Wólka Pełkińska","date_from":"4/25/2016","date_to":"2/14/2016"},
{"id":10,"city_name":"Presnenskiy","date_from":"2/9/2016","date_to":"3/1/2016"}]

const image1 = require("../assets/img/image1.png")
const image2 = require("../assets/img/image2.jpg")
const image3 = require("../assets/img/image3.jpg")
const image4 = require("../assets/img/image4.jpg")
const image5 = require("../assets/img/image5.jpg")
const image6 = require("../assets/img/image6.jpg")
const image7 = require("../assets/img/image7.jpg")
const image8 = require("../assets/img/image8.jpg")
const image9 = require("../assets/img/image9.jpg")
const image10 = require("../assets/img/image10.jpg")
const image11 = require("../assets/img/image11.jpg")
const image12 = require("../assets/img/image12.jpg")
const image13 = require("../assets/img/image13.jpg")

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
]

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
let i = -1

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
    if(i < 5){
      i++
    }else{
      i = 0
    }
    return(
      <Image source={images[i]} resizeMode="stretch" style={{width:330, height:220, margin:5,marginBottom:30, justifyContent:'center', alignItems:'center'}}>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontSize:30, fontWeight:'700'}}>{val.city_name}</Text>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:14, fontWeight:'600'}}>{val.date_from} - {val.date_to}</Text>
      </Image>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1,}}>
          <View style={styles.container}>
            <Image source = {require('../assets/img/logoWhite.png')} resizeMode="contain" style={styles.hero} />
            <Text style={styles.main}>
              Welcome to Despensa!
            </Text>
            <TouchableOpacity style={{margin:10,marginTop:60, marginLeft:20, padding:10, borderWidth:2, borderColor:"#fff", borderRadius:18, width:150}}>
              <Text style={{color:'#fff', textAlign:'center', fontWeight:'600'}}>Discover recipes</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <Text style={styles.title}>Recent Searches</Text>
            <ListView
            dataSource = {this.state.datasource}
            renderRow={(rowData) => this.cityBox(rowData)}
            horizontal = {true}
            />
          </View>
        </ScrollView>
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
    backgroundColor: '#ff585b',
    height:400,
  },
  hero: {
    width:40,
    height:40,
    marginLeft:20,
    marginTop:65,
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
  container2: {
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderBottomColor:'#d3d3d3',
  },
  title:{
    fontWeight:'400',
    fontSize:20,
    color:'#333',
    margin:20,
    marginBottom:15
  },
});

export default DiscoverScreen
