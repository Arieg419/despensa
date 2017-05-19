import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'


import store from './store'
// import AuthScreen from './screens/AuthScreen'
// import WelcomeScreen from './screens/WelcomeScreen'
import DiscoverScreen from './screens/DiscoverScreen'
import DiscoverListScreen from './screens/DiscoverListScreen'
import DiscoverRecipeScreen from './screens/DiscoverRecipeScreen'
import ProfileScreen from './screens/ProfileScreen'
import AskScreen from './screens/AskScreen'
import InboxScreen from './screens/InboxScreen'
import SearchScreen from './screens/SearchScreen'
import ReviewScreen from './screens/ReviewScreen'

import Nav from './components/Nav'

class App extends React.Component {

  componentDidMount() {

  }

  render() {
    const MainNavigator = DrawerNavigator({
      // welcome: { screen: WelcomeScreen },
      // auth: { screen: AuthScreen },
      main: {
        screen: DrawerNavigator({
          discover: {
            screen: StackNavigator({
              discovercategory: { screen: DiscoverScreen },
              discoverlist: { screen: DiscoverListScreen },
              discoverrecipe: { screen: DiscoverRecipeScreen },
            })
          },
          search: { screen: SearchScreen },
          ask: { screen: AskScreen },
          profile: { screen: ProfileScreen },
          inbox: { screen: InboxScreen },
        }),
      }
    },
    {
      lazy: true
    },
    {
      headerMode: 'screen'
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
});

Expo.registerRootComponent(App);
