import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import Reactotron from "reactotron-react-native";
import { Badge } from "react-native-elements";
import DishBadge from "./common/DishBadge";

class DishType extends Component {
  onDishTypeChange = (idx, type) => {
    newDishTypes = this.props.dishTypes;
    newDishTypes[idx]["status"] = !type.status;
    this.props.handler(newDishTypes);
  };
  render() {
    return (
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          Select a Dish Type
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            margin: 10,
            marginTop: 5,
            justifyContent: "space-between"
          }}
        >
          {this.props.dishTypes.map((type, idx) => (
            <DishBadge
              type={type}
              handler={this.onDishTypeChange}
              idx={idx}
              key={idx}
            />
          ))}
        </View>
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
