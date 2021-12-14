import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeCharacterStack, TimeLineScreen, SettingScreen } from ".";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeCharacter"
        component={HomeCharacterStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="TimeLine" component={TimeLineScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
