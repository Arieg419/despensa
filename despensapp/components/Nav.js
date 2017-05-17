
import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Nav extends Component {
  constructor(props){
  	super(props)
  	console.log(this.props)
  }

  menu(){
    console.log("menu clicked")
  }

  render() {
    return (
    	<TouchableOpacity onPress ={() => this.menu()}>
        <View style= {{padding:20, backgroundColor:"pink", flexDirection:'row'}}>
        	<Icon color='blue' name="IconName" size={24} />
        	<Text style={{alignSelf:'center', marginLeft:10, fontWeight:'600', color:'#444', fontSize:16}}>
            Menu
  				</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
