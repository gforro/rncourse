import {Navigation} from "react-native-navigation";
import AuthScreen from "./src/screens/AuthScreen";
import FindPlaceScreen from "./src/screens/FindPlaceScreen";
import SharePlaceScreen from "./src/screens/SharePlaceScreen";
import configureStore from "./src/store/configureStore";
import {Provider} from "react-redux";
import PlaceDetailScreen from "./src/screens/PlaceDetailScreen";
import SideDrawer from "./src/screens/SideDrawer";
import TestComponentScreen from "./src/screens/TestComponentScreen";

const store = configureStore();

Navigation.registerComponent('sk.akitech.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('sk.akitech.FindPlaceScreen', () => FindPlaceScreen, store, Provider);
Navigation.registerComponent('sk.akitech.SharePlaceScreen', () => SharePlaceScreen, store, Provider);
Navigation.registerComponent('sk.akitech.PlaceDetailScreen', () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent('sk.akitech.SideDrawer', () => SideDrawer);
Navigation.registerComponent('test', () => TestComponentScreen);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'sk.akitech.AuthScreen',
        title: 'Login'
    }
});