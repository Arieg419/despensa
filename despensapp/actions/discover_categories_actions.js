import axios from "axios";

const TAP_CATEGORY_REQUEST = "TAP_CATEGORY_REQUEST";
const TAP_CATEGORY_SUCCESS = "TAP_CATEGORY_SUCCESS";
const TAP_CATEGORY_FAILURE = "TAP_CATEGORY_FAILURE";

const ms = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 0);
  });

export const tapCategoryRequest = (dish, navigate) => {
  return async dispatch => {
    dispatch({ type: TAP_CATEGORY_REQUEST });
    try {
      // TODO async call for recipe fata
      const res = await ms();
      if (res === "ok") {
        // TODO navigation method call here
        console.log("tapCategoryRequest() fired...");
        dispatch(tapCategorySuccess(res));
        // navigate("discoverrecipe", {
        //   routeNaming: dish.city_name
        // });
      }
    } catch (error) {
      dispatch(tapCategoryFailure());
      throw new Error(error);
    }
  };
};

export const tapCategorySuccess = payload => ({
  type: TAP_CATEGORY_SUCCESS,
  payload
});

export const tapCategoryFailure = () => ({ type: TAP_RECIPE_FAILURE });
