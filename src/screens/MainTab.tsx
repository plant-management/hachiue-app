import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, FontAwesome } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

import { TimeLineScreen, SettingScreen, HomeScreen } from ".";
import { CreatePlantButton } from "../ui";
import tabBarImage from "../../assets/tab_bar.png";
import menuBarImage from "../../assets/menu_bar.png";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  const navigation = useNavigation();

  const handleCreatePlant = () => {
    navigation.navigate("CreatePlant");
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerBackground: () => (
          <Image source={menuBarImage} style={tailwind("w-full")} />
        ),
        headerTintColor: "white",
        headerStyle: { height: 87 },
        headerRight: () => (
          <CreatePlantButton handleCreatePlant={handleCreatePlant} />
        ),
        tabBarStyle: { position: "absolute", height: 80 },
        tabBarLabelStyle: { paddingBottom: 10 },
        tabBarBackground: () => (
          <Image source={tabBarImage} style={tailwind("w-full")} />
        ),
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "ホーム",
          headerTitleAlign: "left",
          headerLeft: () => <Foundation name="home" size={32} color="white" />,
          headerLeftContainerStyle: { paddingLeft: 24 },
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TimeLine"
        component={TimeLineScreen}
        options={{
          title: "タイムライン",
          headerTitleAlign: "left",
          headerLeft: () => <Foundation name="clock" size={32} color="white" />,
          headerLeftContainerStyle: { paddingLeft: 24 },
          tabBarIcon: ({ color }) => (
            <Foundation name="clock" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: "設定",
          headerTitleAlign: "left",
          headerLeft: () => <FontAwesome name="gear" size={32} color="white" />,
          headerLeftContainerStyle: { paddingLeft: 24 },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
