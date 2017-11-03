export default function(state = { testing: "search_screen_reducer" }, action) {
  switch (action.type) {
    case "SEARCH_RECIPE_SUCCESS":
      return { data: action.payload };
    default:
      return state;
  }
}
