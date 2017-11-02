import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Badge } from "react-native-elements";

class DishBadge extends Component {
  state = {
    selected: true,
    bgColor: { backgroundColor: "rgba(126, 192, 238, 0.4)" }
  };
  badgeBGColor() {
    if (this.state.selected) {
      this.setState({
        selected: !this.state.selected,
        bgColor: { backgroundColor: "skyblue" }
      });
    } else {
      this.setState({
        selected: !this.state.selected,
        bgColor: { backgroundColor: "rgba(126, 192, 238, 0.4)" }
      });
    }
    this.props.handler(this.props.idx, this.props.type);
  }
  render() {
    return (
      <Badge
        containerStyle={[style.badge, this.state.bgColor]}
        onPress={() => this.badgeBGColor()}
      >
        <Text style={style.badgeText}>{this.props.type.name}</Text>
      </Badge>
    );
  }
}

const style = StyleSheet.create({
  badge: {
    backgroundColor: "black",
    width: 80,
    marginTop: 10
  },
  badgeText: {
    fontSize: 11,
    color: "#fff"
  }
});

export default DishBadge;
