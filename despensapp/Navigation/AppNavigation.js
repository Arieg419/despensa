import React, { PropTypes } from "react";
import { connect } from "react-redux";
import {
  StackNavigator,
  TabNavigator,
  addNavigationHelpers,
  DrawerNavigator
} from "react-navigation";

import AuthScreen from "../screens/AuthScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import DiscoverCategoriesScreen from "../screens/DiscoverCategoriesScreen";
import DiscoverCategoryScreen from "../screens/DiscoverCategoryScreen";
import DiscoverRecipeScreen from "../screens/DiscoverRecipeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AskScreen from "../screens/AskScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import ReviewScreen from "../screens/ReviewScreen";
import AddRecipeScreen from "../screens/AddRecipeScreen";
import DrawerMenu from "../containers/DrawerMenu";

const PrimaryNav = DrawerNavigator(
  // welcome: { screen: WelcomeScreen },
  // auth: { screen: AuthScreen },
  {
    Main: {
      screen: StackNavigator({
        discoverscreen: { screen: DiscoverScreen },
        discovercategories: { screen: DiscoverCategoriesScreen },
        discovercategory: { screen: DiscoverCategoryScreen },
        discoverrecipe: { screen: DiscoverRecipeScreen }
      })
    },
    search: {
      screen: StackNavigator({
        searchscreen: { screen: SearchScreen }
      })
    },
    searchresult: {
      screen: StackNavigator({
        searchresultscreen: { screen: SearchResultScreen }
      })
    },
    ask: {
      screen: StackNavigator({
        askscreen: { screen: AskScreen }
      })
    },
    addrecipe: {
      screen: StackNavigator({
        addrecipescreen: { screen: AddRecipeScreen }
      })
    },
    profile: { screen: ProfileScreen },
    favorites: { screen: FavoritesScreen }
  },
  { contentComponent: DrawerMenu }
);

const Navigation = ({ dispatch, primaryNav }) => (
  <PrimaryNav
    navigation={addNavigationHelpers({
      dispatch,
      state: primaryNav
    })}
  />
);

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  primaryNav: PropTypes.object.isRequired
};

export const navReducer = (state, action) => {
  const newState = PrimaryNav.router.getStateForAction(action, state);
  return newState || state;
};

function mapStateToProps(state) {
  return {
    primaryNav: state.navReducer
  };
}

export default connect(mapStateToProps)(Navigation);
