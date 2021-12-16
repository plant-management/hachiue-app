import React from "react";
import { View, Text, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";

import backgroundImage from "../../assets/background.png";

const InitialSettingScreen = () => {
  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={tailwind("h-full w-full")}
      >
        <Text>初期設定画面</Text>
      </ImageBackground>
    </View>
  );
};

export default InitialSettingScreen;
