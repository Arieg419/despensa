import axios from "axios";
import { NavigationActions } from "react-navigation";

const TAP_RECIPE_REQUEST = "TAP_RECIPE_REQUEST";
const TAP_RECIPE_SUCCESS = "TAP_RECIPE_SUCCESS";
const TAP_RECIPE_FAILURE = "TAP_RECIPE_FAILURE";

const ms = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 400);
  });

export const tapRecipeRequest = () => {
  return async dispatch => {
    dispatch({ type: TAP_RECIPE_REQUEST });
    try {
      // TODO async call for recipe fata
      const res = await ms();
      if (res === "ok") {
        // TODO navigation method call here
        dispatch(tapRecipeSuccess(res));
        dispatch(
          NavigationActions.navigate({
            routeName: "discoverrecipe",
            params: {
              name: "Brent"
            }
          })
        );
      }
    } catch (error) {
      dispatch(tapRecipeFailure());
      throw new Error(error);
    }
  };
};

export const tapRecipeSuccess = payload => ({
  type: TAP_RECIPE_SUCCESS,
  payload
});

export const tapRecipeFailure = () => ({ type: TAP_RECIPE_FAILURE });
