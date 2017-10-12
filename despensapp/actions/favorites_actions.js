import axios from "axios";
import Reactotron from "reactotron-react-native";

const FETCH = "search";
const FETCH_FAVORITES_REQUEST = "FETCH_FAVORITES_REQUEST";
const FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS";
const FETCH_FAVORITES_FAILURE = "FETCH_FAVORITES_FAILURE";

const ms =  =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ type: "ok" });
    }, 200);
  });

export const fetchFavorites = () => {
  return async dispatch => {
    dispatch({ type: SEARCH_FAVORITES_REQUEST });
    try {
      const res = await ms();
      if (res.type === "ok") {
        dispatch(fetchFavoritesSuccess(res)); // TODO nav to res page
      }
    } catch (error) {
      dispatch(fetchFavoritesFailure());
      throw new Error(error);
    }
  };
};

export const searchFavoritesSuccess = payload => ({
  type: SEARCH_FAVORITES_SUCCESS,
  payload
});

export const searchFavoritesFailure = payload => ({
  type: SEARCH_FAVORITES_FAILURE,
  payload
});
