import axios from "axios";

const LIKE_DISH = "like_dish";

const ms = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, 600);
  });

export const likeDish = dish => {
  return async dispatch => {
    dispatch({
      payload: dish,
      type: LIKE_DISH
    });
  };
};
