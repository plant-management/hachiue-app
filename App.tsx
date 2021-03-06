import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CameraScreen,
  CreatePlantScreen,
  InitialSettingScreen,
  CharacterScreen,
  MainTab,
} from "./src/screens";
import { storeUserId } from "./src/util/localUserId";

const Stack = createNativeStackNavigator();

export default function App() {
  // Firebaseでユーザー認証を行うまでの暫定措置
  // ユーザー登録画面を作成後はこのコードは不要
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  storeUserId("27b54cf2-c7a4-4b29-bee3-34423960299b");

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
          component={CameraScreen}
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
