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
import Icon from "react-native-vector-icons/MaterialIcons";
import Reactotron from "reactotron-react-native";
import { discover_recent } from "../data/recent_searches";
import RecipeList from "../components/RecipeList";

class SearchResultScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Text style={{ fontSize: 20 }}>Search Results</Text>,
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
    ),
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 5 }}>
        <Icon
          name="arrow-back"
          size={26}
          color="#757575"
          onPress={() => {
            navigation.navigate("searchscreen");
          }}
        />
      </TouchableOpacity>
    )
  });

  render() {
    return this.props.search_result === undefined ||
      this.props.search_result.data === undefined ? (
      <Text>Loading...</Text>
    ) : (
      <View style={styles.parentcontainer}>
        <ScrollView style={{ flex: 1 }}>
          <RecipeList
            data={this.props.search_result.data.results}
            navigatorfunc={this.props}
          />
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
  return { search_result: state.search_screen };
};

export default connect(mapStateToProps, null)(SearchResultScreen);
