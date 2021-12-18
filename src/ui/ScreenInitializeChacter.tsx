import React from "react";
import { View, SafeAreaView, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";

import backgroundImage from "../../assets/background_character.png";

type ScreenInitilizeType = {
  children: JSX.Element;
};

const ScreenInitializeChacter = (props: ScreenInitilizeType): JSX.Element => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={tailwind("h-full w-full")}
      >
        <View>{props.children}</View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenInitializeChacter;
