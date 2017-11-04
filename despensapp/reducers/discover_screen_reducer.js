export default function(state = { testing: "smitten kitchen" }, action) {
  switch (action.type) {
    case "FETCH_HOMEPAGE":
      return { data: action.payload };
    default:
      return state;
  }
}
