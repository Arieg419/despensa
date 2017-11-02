import React, { Component } from "react";
import Reactotron from "reactotron-react-native";
import { Text, View, StyleSheet } from "react-native";
import MultiSelect from "react-native-multiple-select";
import fruitDishes from "../data/Fruite_Recipes/Fruit_Dishes";
import generalDishes from "../data/General_Recipes/General_Dishes";
import sweetDishes from "../data/Sweet_Recipes/Sweet_Dishes";
import vegetableDishes from "../data/Vegetable_Recipes/Vegetable_Dishes";

fruitItems = fruitDishes.map((dish, idx) => {
  return {
    name: dish,
    id: idx
  };
});

generalItems = generalDishes.map((dish, idx) => {
  return {
    name: dish,
    id: dish
  };
});

class MultiSelectPicker extends Component {
  state = {
    selectedItems: []
  };

  items = [...generalItems];

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    this.props.handler(selectedItems);
  };

  render() {
    return (
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 18,
            justifyContent: "center",
            alignSelf: "center",
            margin: 15
          }}
        >
          Select Dishes You Like
        </Text>
        <MultiSelect
          hideTags
          items={this.items}
          uniqueKey="id"
          ref={component => {
            this.multiSelect = component;
          }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          selectText="Dishes you like"
          searchInputPlaceholderText="Search Items..."
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#CCC"
          submitButtonText="Done"
        />
      </View>
    );
  }
}

const style = StyleSheet.create({});

export default MultiSelectPicker;
