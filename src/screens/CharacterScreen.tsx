import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const CharacterScreen = () => {
  const route = useRoute();

  return (
    <View>
      <Text>{route.params.plantName}</Text>
    </View>
  );
};

export default CharacterScreen;
