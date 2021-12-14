import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen, TimeLineScreen, SettingScreen } from ".";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="TimeLine" component={TimeLineScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
