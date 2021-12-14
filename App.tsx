import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { InitialSettingScreen, MainTab } from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTab">
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="InitialSetting" component={InitialSettingScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
