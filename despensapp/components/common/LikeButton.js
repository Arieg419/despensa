import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import Reactotron from "reactotron-react-native";

class LikeButton extends Component {
  constructor(props) {
    super();
    this.state = {
      liked: props.liked || false
    };
  }

  render() {
    if (this.state.liked) {
      return (
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Image
            source={require("../../assets/img/liked_heart.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Image
            source={require("../../assets/img/unliked_heart.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      );
    }
  }

  handlePress() {
    this.setState({
      liked: this.state.liked ? false : true
    });
    this.state.liked ? null : this.props.likeRecipe(this.props.recipe);
  }
}

module.exports = LikeButton;
