import React from "react";
import { View, Text, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";

import backgroundImage from "../../assets/background.png";

const CreatePlantScreen = () => {
  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={tailwind("h-full w-full")}
      >
        <Text></Text>
      </ImageBackground>
    </View>
  );
};

export default CreatePlantScreen;
