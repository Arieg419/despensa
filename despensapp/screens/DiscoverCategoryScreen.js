import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { discover_recent } from "../data/recent_searches";
import RecipeList from "../components/RecipeList";

class DiscoverCategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={{ fontSize: 20 }}>Discover Category</Text>,
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }}>
        <MaterialIcons
          name="reorder"
          size={26}
          color="#ff585b"
          onPress={() => {
            navigation.navigate("DrawerOpen");
          }}
        />
      </TouchableOpacity>
    )
  });

  render() {
    console.log("***************");
    console.log(this.props.discover_category.testing);
    return (
      <View style={styles.parentcontainer}>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              width: 350,
              backgroundColor: "black",
              height: 250,
              margin: 5,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center"
            }}
            resizeMode="stretch"
          >
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontWeight: "700",
                fontSize: 24
              }}
            >
              {this.props.discover_category.testing}
            </Text>
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontWeight: "400",
                fontSize: 14
              }}
            >
              {this.props.discover_category.testing}
            </Text>
          </View>
          <RecipeList data={discover_recent} navigatorfunc={this.props} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentcontainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  halfHeight: {
    flex: 2,
    backgroundColor: "#FF3366"
  },
  quarterHeight: {
    flex: 1,
    backgroundColor: "#000"
  },
  title: {
    fontWeight: "400",
    fontSize: 20,
    color: "#333",
    margin: 20,
    marginBottom: 15
  },
  hero: {
    width: 380,
    height: 260,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return { discover_category: state.discover_category_screen };
};

export default connect(mapStateToProps, null)(DiscoverCategoryScreen);
