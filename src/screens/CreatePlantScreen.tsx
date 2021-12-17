import React, { useState } from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";

import {
  TextInputView,
  PickerView,
  PickerLabelColor,
  ScreenInitilize,
} from "../ui";

const CreatePlantScreen = () => {
  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("");
  const [plantLabelColor, setPlantLabelColor] = useState("");

  const pickerItemList = ["小松菜", "二十日大根"];

  return (
    <ScreenInitilize>
      <>
        <Text
          style={tailwind("text-4xl font-bold text-center py-8 text-gray-800")}
        >
          情報を入力してね!
        </Text>
        <TextInputView
          title="植物の名前"
          textInput={plantName}
          handleTextInput={setPlantName}
        />
        <PickerView
          title="植物の種類"
          pickerItemList={pickerItemList}
          pickerInput={plantType}
          handlePickerInput={setPlantType}
        />
        <PickerLabelColor handleLabelColorInput={setPlantLabelColor} />
      </>
    </ScreenInitilize>
  );
};

export default CreatePlantScreen;
