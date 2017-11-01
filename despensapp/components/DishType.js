import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Badge } from "react-native-elements";
import DishBadge from "./common/DishBadge";

class DishType extends Component {
  state = {
    dishTypes: ["General", "Vegetable", "Sweet", "Fruit"]
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 10,
          marginTop: 5,
          justifyContent: "space-between"
        }}
      >
        {this.state.dishTypes.map((type, idx) => (
          <DishBadge type={type} key={idx} />
        ))}
      </View>
    );
  }
}

const style = StyleSheet.create({
  badge: {
    backgroundColor: "violet",
    width: 80,
    marginTop: 10
  },
  badgeText: {
    fontSize: 10,
    color: "#fff"
  }
});

export default DishType;
