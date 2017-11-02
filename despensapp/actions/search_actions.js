import axios from "axios";
import Reactotron from "reactotron-react-native";

const SEARCH = "search";
const SEARCH_RECIPE_REQUEST = "SEARCH_RECIPE_REQUEST";
const SEARCH_RECIPE_SUCCESS = "SEARCH_RECIPE_SUCCESS";
const SEARCH_RECIPE_FAILURE = "SEARCH_RECIPE_FAILURE";

const ms = query =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ ...query, type: "ok" });
    }, 200);
  });

export const search = query => {
  return async dispatch => {
    dispatch({ type: SEARCH_RECIPE_REQUEST });
    Reactotron.log(query);
    try {
      const res = await ms(query);
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
