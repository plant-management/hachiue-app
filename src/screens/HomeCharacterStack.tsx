import React from "react";
import { Image } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Foundation } from "@expo/vector-icons";

import { HomeScreen, CharacterScreen } from ".";
import menuBarImage from "../../assets/menu_bar.png";

const Stack = createStackNavigator();

const HomeCharacterStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackground: () => <Image source={menuBarImage} />,
        headerTintColor: "white",
        headerStyle: {
          height: 87,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "ホーム",
          headerTitleAlign: "left",
          headerLeft: () => <Foundation name="home" size={32} color="white" />,
          headerLeftContainerStyle: { paddingLeft: 24 },
        }}
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
