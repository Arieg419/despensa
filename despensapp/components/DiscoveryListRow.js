
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class DiscoveryListRow extends Component {

  discoveryListRow(item){
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
        <TouchableOpacity
          style={{flexDirection: "row", justifyContent: 'space-between', margin: 15 }}
          onPress={() => { this.props.navigatorfunc.navigation.navigate('discovercategory', {routeNaming: "Rasperry Pie"}) }}
          >
          <Text style={[styles.title, ]}>{this.props.title}</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={50}
            style={[styles.title, {marginTop: 2}]}
          />
        </TouchableOpacity>
        <FlatList
        data={this.props.data}
        renderItem={({ item }) => this.discoveryListRow(item)}
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

export default DiscoveryListRow
