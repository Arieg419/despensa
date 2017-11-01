import React, { Component } from "react";
import { Text, View } from "react-native";
import TagInput from "react-native-tag-input";

class TagInputComponent extends Component {
  state = {
    tags: this.props.value
  };

  onChangeTags = tags => {
    this.setState({
      tags
    });
    this.props.onChangeTags(tags);
  };

  render() {
    const inputProps = {
      keyboardType: "default"
    };

    return (
      <View style={{ flex: 1, margin: 10, marginTop: 5 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TagInput
            value={this.state.tags}
            onChange={this.onChangeTags}
            tagColor="#AFEAAA"
            tagTextColor="white"
            inputProps={this.props.inputProps}
            numberOfLines={2}
          />
        </View>
      </View>
    );
  }
}

export default TagInputComponent;
