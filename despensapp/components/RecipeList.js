
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class RecipeListRow extends Component {

  recipeItem(item){
    return(
      <TouchableOpacity
        onPress={() => { this.props.navigatorfunc.navigation.navigate('discoverrecipe', {routeNaming: "Rasperry Pie"}) }}
        >
        <Card
          image={item.img}
          style={{margin: 30, marginBottom: 10}}
        >
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
        </Card>
      </TouchableOpacity>
      )
  }

  render() {
    return (
      <View style={styles.discoverRows}>
        <FlatList
        data={this.props.data}
        renderItem={({ item }) => this.recipeItem(item)}
        keyExtractor={item => item.id}
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
});

export default RecipeListRow
