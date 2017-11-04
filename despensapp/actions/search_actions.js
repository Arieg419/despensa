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

const getRecipeCategory = category => {
  switch (category) {
    case "General":
      return fetchGeneralRecipes();
    case "Vegetable":
      return fetchVegetableRecipes();
    case "Sweet":
      return fetchSweetRecipes();
    default:
      return fetchFruitRecipes();
  }
};

const fetchRecipe = ({ recipe }) =>
  new Promise((resolve, reject) => {
    // Get All Recipes for Category
    const recipeIngredients = recipe.recipeIngredients;
    const dishTypes = recipe.dishTypes.filter(dish => {
      return dish.status;
    });
    let recipes = getRecipeCategory(dishTypes[0].name);

    // Filter Recipes by Dish
    const selectedDishes = recipe.multiSelected;
    recipes = recipes.filter(recipe => {
      for (let selectedDish of selectedDishes) {
        if (selectedDish in recipe) {
          return true;
        }
      }
      return false;
    });

    // Get Ingredients in Liked Dish
    let search_results = [];
    for (let recipe of recipes) {
      for (let selectedDish of selectedDishes) {
        if (selectedDish in recipe) {
          for (let singular_recipe of recipe[selectedDish]) {
            for (let ingredient of recipeIngredients) {
              if (singular_recipe.tags.includes(ingredient)) {
                search_results.push(singular_recipe);
              }
            }
          }
        }
      }
    }
    resolve({ ...recipe, type: "ok", results: search_results });
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
