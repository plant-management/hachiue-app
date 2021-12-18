import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const CharacterScreen = () => {
  const route = useRoute();

  useEffect(() => console.log(route.params));

  return (
    <View>
      <Text>{route.params.plantId}</Text>
    </View>
  );
};

export default CharacterScreen;
