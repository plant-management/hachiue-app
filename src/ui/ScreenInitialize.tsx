import React from "react";
import { SafeAreaView, ImageBackground, View } from "react-native";
import tailwind from "tailwind-rn";

import backgroundImage from "../../assets/background.png";

type ScreenInitilizeType = {
  children: JSX.Element;
};

const ScreenInitialize = (props: ScreenInitilizeType): JSX.Element => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={tailwind("h-full w-full")}
      >
        <View style={tailwind("p-6")}>{props.children}</View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ScreenInitialize;
