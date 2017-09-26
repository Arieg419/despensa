import axios from 'axios';

const discoverRecipeTapped = exports.discover_actions = () => {
  console.log('discover recipes tapped')
  return { type: DISCOVER_RECIPE_TAPPED };
}
