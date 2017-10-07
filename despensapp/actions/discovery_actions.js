import axios from "axios";

const TAP_RECIPE_REQUEST = "TAP_RECIPE_REQUEST";
const TAP_RECIPE_SUCCESS = "TAP_RECIPE_SUCCESS";
const TAP_RECIPE_FAILURE = "TAP_RECIPE_FAILURE";

const ms = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 600);
  });

export const tapRecipeRequest = cb => {
  return async dispatch => {
    console.log("in action creator ");
    dispatch({ type: TAP_RECIPE_REQUEST });
    try {
      // TODO async call for recipe fata
      const res = await ms();
      if (res === "ok") {
        // TODO navigation method call here
        console.log("tapRecipeRequest() fired...");
        console.log(cb);
        dispatch(tapRecipeSuccess(res));
        cb();
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
