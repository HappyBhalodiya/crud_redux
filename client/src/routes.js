import React from "react";
import AddData from './addData'

import { createStackNavigator } from "react-navigation-stack";


import {
  
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";



const MainNavigator = createStackNavigator({
  AddData: {
    screen: AddData,
  },
  

  
});

const Routes = createAppContainer(MainNavigator);
export default Routes;