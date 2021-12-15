import React from "react";
import { Image } from "react-native";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";

import { HomeCharacterStack, TimeLineScreen, SettingScreen } from ".";
import tabBar from "../../assets/tab_bar.png";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: 90,
        },
        tabBarBackground: () => <Image source={tabBar} />,
        tabBarShowLabel: false,
      }}
    >
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
