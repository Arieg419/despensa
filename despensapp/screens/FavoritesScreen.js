import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
import Container from "../components/common/Container";
import CustomText from "../components/common/Text";
import ThumbSingleItem from "../components/common/SingleItem";
import ThumbMultipleItems from "../components/common/MultipleItems";
import items from "../data/saved";
import Icon from "react-native-vector-icons/MaterialIcons";
import Reactotron from "reactotron-react-native";

class FavoritesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: "Favorites",
    drawerIcon: ({ tintColor }) => (
      <Icon name="search" size={24} style={{ color: tintColor }} />
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

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("discoverrecipe", {
            routeNaming: item.title,
            params: { ...item, back: "Main" }
          });
        }}
      >
        <Image
          source={{ uri: item.img }}
          resizeMode="stretch"
          style={styles.recentlySearchedItem}
        >
          <View>
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontSize: 30,
                fontWeight: "700"
              }}
            />
          </View>
          <View>
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontSize: 30,
                fontWeight: "700"
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                color: "#fff",
                fontSize: 14,
                fontWeight: "600"
              }}
            >
              {item.date}
            </Text>
          </View>
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginRight: 10, marginBottom: 10 }}
          />
        </Image>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <Text style={styles.screenTitle} type="h1">
          Favorites
        </Text>
        <FlatList
          data={this.props.favorites_data}
          renderItem={item => this.renderRow(item)}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenTitle: {
    fontWeight: "700",
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 35
  },
  holder: {
    paddingHorizontal: 25,
    flex: 1
  },
  recentlySearchedItem: {
    width: 330,
    height: 220,
    margin: 5,
    marginBottom: 30,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return { favorites_data: state.favorites_screen };
};

export default connect(mapStateToProps, null)(FavoritesScreen);
