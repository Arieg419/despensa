import Expo from 'expo'
import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { TabNavigator, DrawerNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'


import store from './store'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import DiscoverScreen from './screens/DiscoverScreen'
import DiscoverCategoriesScreen from './screens/DiscoverCategoriesScreen'
import DiscoverCategoryScreen from './screens/DiscoverCategoryScreen'
import DiscoverRecipeScreen from './screens/DiscoverRecipeScreen'
import ProfileScreen from './screens/ProfileScreen'
import AskScreen from './screens/AskScreen'
import InboxScreen from './screens/InboxScreen'
import SearchScreen from './screens/SearchScreen'
import ReviewScreen from './screens/ReviewScreen'
import AddRecipeScreen from './screens/AddRecipeScreen'
import DrawerMenu from './containers/DrawerMenu'

class App extends React.Component {

  render() {
    const MainNavigator = DrawerNavigator(
      // welcome: { screen: WelcomeScreen },
      // auth: { screen: AuthScreen },
      {
        Main: {
          screen: StackNavigator({
            discoverscreen: { screen: DiscoverScreen },
            discovercategories: { screen: DiscoverCategoriesScreen },
            discovercategory: { screen: DiscoverCategoryScreen },
            discoverrecipe: { screen: DiscoverRecipeScreen },
          })
        },
        search: {
          screen: StackNavigator({
            searchscreen: { screen: SearchScreen },
          })
        },
        ask: {
          screen: StackNavigator({
            askscreen: { screen: AskScreen },
          })
        },
        addrecipe: {
          screen: StackNavigator({
            addrecipescreen: { screen: AddRecipeScreen },
          })
        },
        profile: {
          screen: ProfileScreen
        },
      },
      {
        contentComponent: DrawerMenu,
      }
    );

    // {
    //   contentOptions: {
    //     activeTintColor: '#7BC4A4',
    //     style: {
    //       backgroundColor:'rgba(255,255,255,0.93)',
    //     },
    //   }

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
