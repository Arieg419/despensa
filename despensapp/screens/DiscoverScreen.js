import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ListView,
  FlatList,
  Image,
  Platform
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Button } from "react-native-elements";
import * as actions from "../actions";
import {
  discover_trending,
  discover_recent,
  discover_new
} from "../data/recent_searches";
import DiscoveryRow from "../components/DiscoveryRow";

class DiscoverScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: "Discover",
    drawerIcon: ({ tintColor }) => {
      console.log(tintColor);
      return (
        <MaterialIcons name="whatshot" size={24} style={{ color: tintColor }} />
      );
    },
    header: null
  });

  componentDidMount() {
    console.log("actions", this.props);
  }

  onRecipeTapped() {
    this.props.discoverRecipe();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <TouchableOpacity
              style={{
                margin: 20,
                marginTop: 30,
                padding: 0,
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <MaterialIcons
                name="reorder"
                size={26}
                color="#fff"
                onPress={() => {
                  this.props.navigation.navigate("DrawerOpen");
                }}
              />
            </TouchableOpacity>
            <Image
              source={require("../assets/img/logoWhite.png")}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.welcomeText}>
              {this.props.discover_data.testing}
            </Text>
            <TouchableOpacity
              style={styles.heroButton}
              onPress={() => {
                this.props.navigation.navigate("discovercategories", {
                  name: "Brent"
                });
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "600"
                }}
              >
                Discover recipes
              </Text>
            </TouchableOpacity>
          </View>
          <DiscoveryRow
            data={discover_trending}
            onRecipePress={this.props.discoverRecipe}
            title={"What's Trending"}
          />
          <DiscoveryRow
            data={discover_recent}
            onRecipePress={this.props.discoverRecipe}
            title={"Recent Searches"}
          />
          <DiscoveryRow
            data={discover_new}
            onRecipePress={this.props.discoverRecipe}
            title={"New Recipes"}
          />
        </ScrollView>
        <TouchableOpacity style={styles.searchFAB}>
          <MaterialIcons
            name="search"
            size={22}
            color="#fff"
            onPress={() => {
              this.props.navigation.navigate("searchscreen");
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff585b",
    height: 400
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginTop: 0,
    padding: 0
  },
  heroButton: {
    margin: 10,
    marginTop: 60,
    marginLeft: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 18,
    width: 150
  },
  welcomeText: {
    fontSize: 25,
    textAlign: "left",
    color: "#fff",
    fontWeight: "600",
    width: 200,
    margin: 10,
    marginLeft: 20,
    marginTop: 30
  },
  searchFAB: {
    width: 60,
    borderWidth: 3,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#ff585b",
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 20
  }
});

const mapStateToProps = state => {
  return { discover_data: state.discover_screen };
};

const mapDispatchToProps = dispatch => ({
  discoverRecipe: () => dispatch(actions.tapRecipeRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverScreen);
