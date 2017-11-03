import axios from "axios";
import Reactotron from "reactotron-react-native";
import {
  fetchGeneralRecipes,
  fetchSweetRecipes,
  fetchVegetableRecipes,
  fetchFruitRecipes
} from "./recipes";

const SEARCH = "search";
const SEARCH_RECIPE_REQUEST = "SEARCH_RECIPE_REQUEST";
const SEARCH_RECIPE_SUCCESS = "SEARCH_RECIPE_SUCCESS";
const SEARCH_RECIPE_FAILURE = "SEARCH_RECIPE_FAILURE";

const name = "Bars";
const path_name = `../data/Sweet_Recipes/Bars/merged_file.json`;

const fetchRecipe = query =>
  new Promise((resolve, reject) => {
    Reactotron.log(fetchVegetableRecipes());
    setTimeout(() => {
      resolve({ ...query, type: "ok", result: "data" });
    }, 200);
  });

export const search = query => {
  return async dispatch => {
    dispatch({ type: SEARCH_RECIPE_REQUEST });
    try {
      const res = await fetchRecipe(query);
      if (res.type === "ok") {
        dispatch(searchRecipeSuccess(res)); // TODO nav to res page
      }
    } catch (error) {
      dispatch(searchRecipeFailure());
      throw new Error(error);
    }
  };
};

export const searchRecipeSuccess = payload => ({
  type: SEARCH_RECIPE_SUCCESS,
  payload
});

export const searchRecipeFailure = payload => ({
  type: SEARCH_RECIPE_FAILURE,
  payload
});
