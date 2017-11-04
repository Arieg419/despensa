const LIKE_RECIPE = "like_recipe";
const FAVORITES = "favorites";
const FAVORITE_RECIPE = "favorite_recipe";
import Reactotron from "reactotron-react-native";

export default function(state = {}, action) {
  switch (action.type) {
    case FAVORITES:
      return [action.payload];
    case FAVORITE_RECIPE:
      return [...state, action.payload];
    default:
      return state;
  }
}
