import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Reactotron from "reactotron-react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Recipe from "../components/Recipe";

class DiscoverRecipeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    Reactotron.log(navigation.state.params.params);
    let backRoute = "searchresult";
    if ("back" in navigation.state.params.params) {
      backRoute = "discoverscreen";
    }
    return {
      headerTitle: (
        <Text style={{ fontSize: 20 }}>
          {navigation.state.params["routeNaming"]}
        </Text>
      ),
      headerRight: (
        <TouchableOpacity style={{ marginRight: 20 }}>
          <MaterialIcons
            name="reorder"
            size={26}
            color="#ff585b"
            onPress={() => {
              navigation.navigate("DrawerOpen");
            }}
          />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 5 }}>
          <Icon
            name="arrow-back"
            size={26}
            color="#757575"
            onPress={() => {
              navigation.navigate(backRoute);
            }}
          />
        </TouchableOpacity>
      )
    };
  };

  render() {
    const {
      img,
      ingredient_list,
      tags,
      directions
    } = this.props.navigation.state.params.params;
    return (
      <View>
        <Recipe
          img={img}
          ingredientList={ingredient_list}
          directions={directions}
          tags={tags}
        />
      </View>
    );
  }
}

export default DiscoverRecipeScreen;
