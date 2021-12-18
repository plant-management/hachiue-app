import React from "react";
import { View, Text, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";
import { Foundation, FontAwesome } from "@expo/vector-icons";

import tabBarImage from "../../assets/tab_bar.png";

const CharacterFooter = () => {
  return (
    <ImageBackground
      source={tabBarImage}
      style={tailwind("w-full h-20 flex-row justify-around items-center")}
    >
      <View style={tailwind("flex justify-center items-center")}>
        <Foundation name="home" size={32} color="gray" />
        <Text style={tailwind("text-gray-400 text-xs pt-4")}>ホーム</Text>
      </View>
      <View style={tailwind("flex justify-center items-center")}>
        <Foundation name="clock" size={32} color="gray" />
        <Text style={tailwind("text-gray-400 text-xs pt-4")}>ホーム</Text>
      </View>
      <View style={tailwind("flex justify-center items-center")}>
        <FontAwesome name="gear" size={32} color="gray" />
        <Text style={tailwind("text-gray-400 text-xs pt-4")}>ホーム</Text>
      </View>
    </ImageBackground>
  );
};

export default CharacterFooter;
