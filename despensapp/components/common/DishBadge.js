import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Badge } from "react-native-elements";

class DishBadge extends Component {
  state = {
    selected: false,
    bgColor: { backgroundColor: "skyblue" }
  };
  badgeBGColor() {
    if (this.state.selected) {
      this.setState({
        selected: !this.state.selected,
        bgColor: { backgroundColor: "rgba(126, 192, 238, 0.4)" }
      });
    } else {
      this.setState({
        selected: !this.state.selected,
        bgColor: { backgroundColor: "skyblue" }
      });
    }
  }
  render() {
    return (
      <Badge containerStyle={[style.badge, this.state.bgColor]}>
        <Text
          style={style.badgeText}
          onPress={() => {
            this.badgeBGColor();
          }}
        >
          {this.props.type}
        </Text>
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
