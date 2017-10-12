import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class RecipeListRow extends Component {
  recipeItem(item) {
    // TODO routeName will be plucked from recipe
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigatorfunc.navigation.navigate("discoverrecipe", {
            routeNaming: "Rasperry Pie"
          });
        }}
      >
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 250,
            margin: 5,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center"
          }}
          resizeMode="stretch"
        >
          <Text
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              color: "#fff",
              fontWeight: "700",
              fontSize: 24
            }}
          >
            {item.city_name}
          </Text>
          <Text
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              color: "#fff",
              fontWeight: "400",
              fontSize: 14
            }}
          >
            {item.date_from} - {item.date_to}
          </Text>
        </Image>
      </TouchableOpacity>
    );
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
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#d3d3d3"
  }
});

export default RecipeListRow;
