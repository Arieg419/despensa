export default function(state = { testing: "search_screen_reducer" }, action) {
  switch (action.type) {
    case "SEARCH":
      return { data: action.payload };
    default:
      return state;
  }
}
