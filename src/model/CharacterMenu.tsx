import React from "react";
import { ScrollView, Text } from "react-native";
import tailwind from "tailwind-rn";

const CharacterMenu = () => {
  return (
    <ScrollView>
      <Text style={tailwind("flex-1 bg-gray-200")}>メニュー1</Text>
      <Text style={tailwind("flex-1 bg-gray-200")}>メニュー2</Text>
    </ScrollView>
  );
};

export default CharacterMenu;
