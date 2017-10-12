import axios from "axios";
import Reactotron from "reactotron-react-native";

const FAVORITE_RECIPE = "favorite_recipe";

const ms = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 400);
  });

export const likeRecipe = recipe => {
  return async dispatch => {
    dispatch({
      payload: recipe,
      type: FAVORITE_RECIPE
    });
  };
};
