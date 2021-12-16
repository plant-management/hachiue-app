import React from "react";
import { View, Text, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";

import backgroundImage from "../../assets/background.png";

const TimeLineScreen = () => {
  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={tailwind("h-full w-full")}
      >
        <Text>タイムライン画面</Text>
      </ImageBackground>
    </View>
  );
};

export default TimeLineScreen;
