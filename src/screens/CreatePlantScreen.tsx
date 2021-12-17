import React, { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";

import { TextInputView } from "../ui";
import backgroundImage from "../../assets/background.png";

const CreatePlantScreen = () => {
  const [plantName, setPlantName] = useState("");

  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={tailwind("h-full w-full")}
      >
        <TextInputView
          title="植物の名前"
          textInput={plantName}
          handleTextInput={setPlantName}
        />
      </ImageBackground>
    </View>
  );
};

export default CreatePlantScreen;
