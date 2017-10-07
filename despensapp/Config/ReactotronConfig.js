import Config from "./DebugConfig";
import Reactotron from "reactotron-react-native";
Reactotron.log("hello rendering world");
import { reactotronRedux as reduxPlugin } from "reactotron-redux";

// if (Config.useReactotron) {
//   console.log("hello reactotron");
Reactotron.configure({ name: "Despensa App" })
  .useReactNative()
  .use(reduxPlugin())
  .connect();
//
//   // Let's clear Reactotron on every time we load the app
//   if (__DEV__) {
Reactotron.connect();
Reactotron.clear();
//   }
//
//   // Totally hacky, but this allows you to not both importing reactotron-react-native
//   // on every file.  This is just DEV mode, so no big deal.
console.tron = Reactotron;
// }
