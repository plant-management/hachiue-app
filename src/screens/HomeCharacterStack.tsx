import React from "react";
import { Image } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen, CharacterScreen } from ".";
import menuBar from "../../assets/menu_bar.png";

const Stack = createStackNavigator();

const HomeCharacterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <Image source={menuBar} />,
      }}
    >
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
