 
// import React from "react";
// import AddData from './src/addData'
// import {
//   createStackNavigator,
//   createAppContainer,
//   createMaterialTopTabNavigator
// } from "react-navigation";



// const MainNavigator = createStackNavigator({
//   AddData: {
//   screen: AddData,
// },


// });

// const Routes = createAppContainer(MainNavigator);
// export default Routes;
import React from "react";
import AddData from './src/addData'



import {
  createStackNavigator,
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