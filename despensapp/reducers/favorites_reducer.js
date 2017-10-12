const LIKE_RECIPE = "like_recipe";
const FAVORITES = "favorites";
const FAVORITE_RECIPE = "favorite_recipe";
import Reactotron from "reactotron-react-native";

export default function(
  state = { testing: "favorites_screen_reducer" },
  action
) {
  switch (action.type) {
    case FAVORITES:
      return { data: action.payload };
    case FAVORITE_RECIPE:
      return { ...state, [action.payload.city_name]: action.payload };
    default:
      return state;
  }
}
