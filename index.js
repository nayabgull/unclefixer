/**
 * @format
 */
// import ReactNativeForegroundService from "@supersami/rn-foreground-service";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from "react-native-firebase";
import bgActions from "./src/components/firebaseClient/bgActions";

// Register the service
// ReactNativeForegroundService.register();
// ReactNativeForegroundService.start({
//     id: 144,
//     title: "Uncle Fixer",
//     message: "app is running!",
//     icon:'https://unclefixer.com/static/media/unclefixer-logo-1.b0caecc7.png'
// });
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('ReactNativeFirebaseMessagingHeadlessTask', () => bgActions()); // <-- Add this line
