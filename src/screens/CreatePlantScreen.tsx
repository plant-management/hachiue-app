import React, { useState } from "react";
import { SafeAreaView, ImageBackground, View } from "react-native";
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
        <View style={tailwind("w-5/6")}>
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
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreatePlantScreen;
