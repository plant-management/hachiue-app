import React from "react";
import { View, Text } from "react-native";

type CharacterDataProps = {
  plantName: string;
  plantType: string;
  day: number;
  weatherIcon: ["sunny", "rain", "cloud"];
  temp: number;
  humidity: number;
  satisfaction: number;
  comment: string;
  characterImage: string;
};

const CharacterMain = (props: CharacterDataProps) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default CharacterMain;
