import Expo from "expo";
import "expo";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Navigation from "./Navigation/AppNavigation";
import { Provider } from "react-redux";
import "./Config/ReactotronConfig";
import store from "./store";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? 24 : 0
  }
});

Expo.registerRootComponent(App);
