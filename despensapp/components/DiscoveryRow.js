
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class DiscoveryRow extends Component {

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
      <View style={styles.discoverRows}>
        <Text style={styles.title}>{this.props.title}</Text>
        <FlatList
        data={this.props.data}
        renderItem={({ item }) => this.discoveryRow(item)}
        keyExtractor={item => item.id}
        horizontal = {true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

export default DiscoveryRow
