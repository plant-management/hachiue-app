import React, { useState } from "react";

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

  return (
    <ScreenInitilize>
      <>
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
      </>
    </ScreenInitilize>
  );
};

export default CreatePlantScreen;
