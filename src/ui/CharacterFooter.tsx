import React from "react";
import { TouchableOpacity, Text, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";
import { Foundation, FontAwesome } from "@expo/vector-icons";

import tabBarImage from "../../assets/tab_bar.png";

type CharacterFooterProps = {
  onPressHome: () => void;
  onPressTimeLine: () => void;
  onPressSetting: () => void;
};

const CharacterFooter = (props: CharacterFooterProps) => {
  return (
    <ImageBackground
      source={tabBarImage}
      style={tailwind("w-full h-20 flex-row justify-around items-center")}
    >
      <TouchableOpacity
        style={tailwind("flex justify-center items-center")}
        onPress={props.onPressHome}
      >
        <Foundation name="home" size={32} color="gray" />
        <Text style={tailwind("text-gray-400 text-xs pt-4")}>ホーム</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind("flex justify-center items-center")}
        onPress={props.onPressTimeLine}
      >
        <Foundation name="clock" size={32} color="gray" />
        <Text style={tailwind("text-gray-400 text-xs pt-4")}>タイムライン</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind("flex justify-center items-center")}
        onPress={props.onPressSetting}
      >
        <FontAwesome name="gear" size={32} color="gray" />
        <Text style={tailwind("text-gray-400 text-xs pt-4")}>設定</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default CharacterFooter;
