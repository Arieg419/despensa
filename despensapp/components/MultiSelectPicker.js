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

sweetItems = sweetDishes.map((dish, idx) => {
  return {
    name: dish,
    id: idx
  };
});

vegegatbleItems = vegetableDishes.map((dish, idx) => {
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

  items = [];

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    this.props.handler(selectedItems);
  };

  getMenuOptions = () => {
    const dishTypes = this.props.dishTypes.filter(dishType => {
      return dishType.status;
    });
    this.items = [];
    if (dishTypes.length === 0) {
      return [
        {
          name: "Please select a dish category",
          id: "Please select a dish category"
        }
      ];
    }
    for (let dishType of dishTypes) {
      if (dishType.name === "General") {
        this.items.push(...generalItems);
      } else if (dishType.name === "Vegetable") {
        this.items.push(...vegegatbleItems);
      } else if (dishType.name === "Sweet") {
        this.items.push(...sweetItems);
      } else {
        this.items.push(...fruitItems);
      }
    }
    return this.items;
  };

  render() {
    const res = this.getMenuOptions();
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
          items={this.getMenuOptions()}
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
