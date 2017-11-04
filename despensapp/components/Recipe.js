import React, { Component } from "react";
import { View, Text, Image, ScrollView, Linking } from "react-native";
import Reactotron from "reactotron-react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card, CardSection, Spinner, Button } from "./common";
import ToggleButton from "./ToggleButton";

class Recipe extends Component {
  state = { showIngredients: true, showBugModal: false };

  renderIngredientList(ingredientsList) {
    return ingredientsList.map((ingredient, i) => {
      return (
        <Text key={i} style={styles.ingredient}>
          <Text style={{ color: "#bb4467" }}> + </Text>
          {ingredient}
        </Text>
      );
    });
  }

  renderDirectionList(directions) {
    return directions.map((dir, i) => {
      return (
        <Text key={i} style={styles.ingredient}>
          <Text style={{ color: "#bb4467" }}> {i + 1}. </Text>
          {dir}
        </Text>
      );
    });
  }

  renderList(ingredientsList, directions) {
    if (this.state.showIngredients) {
      return this.renderIngredientList(ingredientsList);
    }
    return this.renderDirectionList(directions);
  }

  renderNotes() {
    if (notes) {
      return (
        <CardSection>
          <Text>{notes}</Text>
        </CardSection>
      );
    }
    return;
  }

  render() {
    Reactotron.log(this.props);
    return (
      <ScrollView>
        <Card style={{ flex: 1 }}>
          <Image
            source={{ uri: this.props.img }}
            style={{
              width: 350,
              height: 250,
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center"
            }}
            resizeMode="stretch"
          />
          <View style={styles.toggleContainer}>
            <ToggleButton
              onPress={() => this.setState({ showIngredients: true })}
              selected={this.state.showIngredients}
            >
              Ingredients
            </ToggleButton>
            <ToggleButton
              onPress={() => this.setState({ showIngredients: false })}
              selected={!this.state.showIngredients}
            >
              Directions
            </ToggleButton>
          </View>
          <View style={{ flex: 1 }}>
            {this.renderList(this.props.ingredientList, this.props.directions)}
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  backdrop: {
    height: 320,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  backdropView: {
    height: 320,
    width: 320,
    backgroundColor: "rgba(80,94,104,0.6)",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  headline: {
    fontSize: 24,
    backgroundColor: "rgba(0,0,0,0)",
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  toggleContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  ingredient: {
    marginTop: 5,
    margin: 5,
    color: "#6B7794",
    fontSize: 16
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#6B7794"
  }
};

export default Recipe;
