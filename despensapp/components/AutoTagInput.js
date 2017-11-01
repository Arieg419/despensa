import React, { Component } from "react";
import { Text, View } from "react-native";
import AutoTags from "react-native-tag-autocomplete";

class AutoTagInput extends Component {
  state = {
    suggestions: [{ name: "Mickey Mouse" }],
    tagsSelected: []
  };

  handleDelete = index => {
    let tagsSelected = this.state.tagsSelected;
    tagsSelected.splice(index, 1);
    this.setState({ tagsSelected });
  };

  handleAddition = suggestion => {
    this.setState({
      tagsSelected: this.state.tagsSelected.concat([suggestion])
    });
  };

  render() {
    return (
      <AutoTags
        suggestions={this.state.suggestions}
        tagsSelected={this.state.tagsSelected}
        handleAddition={this.handleAddition}
        handleDelete={this.handleDelete}
        placeholder="Add a contact.."
      />
    );
  }
}

export default AutoTagInput;
