export default function(
  state = { testing: "discover_screen_reducer" },
  action
) {
  switch (action.type) {
    case "FETCH_HOMEPAGE":
      return { data: action.payload };
    default:
      return state;
  }
}
