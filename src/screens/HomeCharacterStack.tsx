import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, CharacterScreen } from ".";

const Stack = createNativeStackNavigator();

const HomeCharacterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "ホーム" }}
      />
      <Stack.Screen
        name="Character"
        component={CharacterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeCharacterStack;
