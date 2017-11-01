import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import TagInputComponent from "./TagInput";

class IngredientType extends Component {
  state = {
    recipeIngredients: []
  };
  onUpdateRecipeIngredients = tags => {
    this.setState({ recipeIngredients: tags });
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
          Add Your Ingredients
        </Text>
        <TagInputComponent
          style={{ margin: 10 }}
          value={["General", "Vegetable", "Sweet", "Fruit"]}
          onChangeTags={this.onUpdateRecipeIngredients}
          inputProps={{ autoFocus: false }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({});

export default IngredientType;
