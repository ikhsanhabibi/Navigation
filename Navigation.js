import One from "./One";
import Two from "./Two";
import BarcodeScanner from "./BarcodeScanner";
import Forms from "./Forms";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const Navigation = createBottomTabNavigator({
    BarcodeScanner: BarcodeScanner,
    One: One,
    Two: Two,
    Forms: Forms
});

const ScreenNavigator = createStackNavigator({
    BarcodeScanner: Forms
});

export default createAppContainer(Navigation);
