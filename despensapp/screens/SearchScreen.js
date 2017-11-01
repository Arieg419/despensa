import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import {
  Button,
  ButtonGroup,
  Text,
  FormLabel,
  CheckBox,
  SearchBar,
  Slider
} from "react-native-elements";
import Reactotron from "reactotron-react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import TagInputComponent from "../components/TagInput";
import SelectDishType from "../components/DishType";
import SelectIngredientType from "../components/IngredientType";

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeIngredients: [],
      recipeDifficulty: 0,
      sliderValue: 0
    };

    this.onUpdateRecipeIngredients = this.onUpdateRecipeIngredients.bind(this);
    this.onUpdateRecipeDifficulty = this.onUpdateRecipeDifficulty.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: "Search",
    drawerIcon: ({ tintColor }) => (
      <Icon name="search" size={24} style={{ color: tintColor }} />
    ),
    headerTitle: <Text style={{ fontSize: 20 }}>Search for Recipes</Text>,
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }}>
        <Icon
          name="reorder"
          size={26}
          color="#ff585b"
          onPress={() => {
            navigation.navigate("DrawerOpen");
          }}
        />
      </TouchableOpacity>
    ),
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 5 }}>
        <Icon
          name="arrow-back"
          size={26}
          color="#757575"
          onPress={() => {
            navigation.navigate("discoverscreen");
          }}
        />
      </TouchableOpacity>
    )
  });

  onUpdateRecipeIngredients(tags) {
    this.setState({ tags });
  }

  onUpdateRecipeDifficulty(recipeDifficulty) {
    this.setState({ recipeDifficulty });
  }

  onSubmit() {
    Reactotron.log(this.state);
    this.props.search({ recipe: "hot dog" });
  }

  render() {
    const buttons = ["Easy", "Everything"];
    const { recipeDifficulty } = this.state;

    return (
      <ScrollView
        style={{ backgroundColor: "white" }}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.container}>
          <Image
            source={require("../assets/img/search.jpg")}
            resizeMode="stretch"
            style={styles.hero}
          >
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontSize: 30,
                fontWeight: "700"
              }}
            >
              Find Your Dish
            </Text>
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontSize: 14,
                fontWeight: "600"
              }}
            >
              {this.props.search_data.testing}
            </Text>
          </Image>
        </View>
        <View style={{ flex: 1, justifyContent: "center", marginTop: 10 }}>
          <SelectDishType />
          <SelectIngredientType />
        </View>

        <Button
          onPress={this.onSubmit}
          buttonStyle={{
            marginTop: 15,
            borderRadius: 20,
            backgroundColor: "#ff585b"
          }}
          title="Find Recipe"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  headingContainer: {
    padding: 5,
    backgroundColor: "#ff585b",
    height: 220
  },
  heading: {
    color: "white",
    fontSize: 22
  },
  labelContainerStyle: {
    marginTop: 8
  },
  hero: {
    width: 800,
    height: 260,
    justifyContent: "center",
    alignItems: "center"
  }
});
const mapStateToProps = state => {
  return { search_data: state.search_screen };
};

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(actions.search(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

// <TagInputComponent
//   style={{ margin: 10 }}
//   onChangeTags={this.onUpdateRecipeIngredients}
//   inputProps={{ placeholder: "Add Ingredients", autoFocus: false }}
// />
