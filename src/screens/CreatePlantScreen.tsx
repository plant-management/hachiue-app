import React, { useEffect, useState } from "react";
import { SafeAreaView, ImageBackground } from "react-native";
import tailwind from "tailwind-rn";

import { TextInputView, PickerView, PickerLabelColor } from "../ui";
import backgroundImage from "../../assets/background.png";

const CreatePlantScreen = () => {
  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("");
  const [plantLabelColor, setPlantLabelColor] = useState("");

  return (
    <SafeAreaView>
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
        <PickerView
          title="植物の種類"
          pickerInput={plantType}
          handlePickerInput={setPlantType}
        />
        <PickerLabelColor handleLabelColorInput={setPlantLabelColor} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreatePlantScreen;
