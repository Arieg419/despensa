import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import LikeButton from "./common/LikeButton";

class DiscoveryRow extends Component {
  static propTypes = {
    onRecipePress: PropTypes.func.isRequired
  };

  onButtonPress(item) {
    this.props.onRecipePress();
  }

  discoveryRow(item) {
    return (
      <TouchableOpacity onPress={item => this.onButtonPress(item)}>
        <Image
          source={item.img}
          resizeMode="stretch"
          style={styles.recentlySearchedItem}
        >
          <View>
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontSize: 30,
                fontWeight: "700"
              }}
            />
          </View>
          <View>
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontSize: 30,
                fontWeight: "700"
              }}
            >
              {item.city_name}
            </Text>
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontSize: 14,
                fontWeight: "600"
              }}
            >
              {item.date_from} - {item.date_to}
            </Text>
          </View>
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginRight: 10, marginBottom: 10 }}
          >
            <LikeButton likeRecipe={this.props.likeRecipe} recipe={item} />
          </TouchableOpacity>
        </Image>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.discoverRows}>
        <Text style={styles.title}>{this.props.title}</Text>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => this.discoveryRow(item)}
          keyExtractor={item => item.id}
          horizontal={true}
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
  },
  title: {
    fontWeight: "400",
    fontSize: 20,
    color: "#333",
    margin: 20,
    marginBottom: 15
  },
  recentlySearchedItem: {
    width: 330,
    height: 220,
    margin: 5,
    marginBottom: 30,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default DiscoveryRow;
