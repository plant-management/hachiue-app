import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Camera,
  CreatePlantScreen,
  InitialSettingScreen,
  CharacterScreen,
  MainTab,
} from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialSetting">
        <Stack.Screen name="InitialSetting" component={InitialSettingScreen} />
        <Stack.Screen
          name="CreatePlant"
          component={CreatePlantScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Character"
          component={CharacterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
