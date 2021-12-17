import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";

import {
  TextInputView,
  PickerView,
  PickerLabelColor,
  ScreenInitilize,
  Button,
} from "../ui";
import { getUserId } from "../util/localUserId";

const CreatePlantScreen = () => {
  const [plantName, setPlantName] = useState("");
  const [plantType, setPlantType] = useState("");
  const [plantLabelColor, setPlantLabelColor] = useState("");

  const navigation = useNavigation();

  const pickerItemList = ["小松菜", "二十日大根"];

  const handlePressNext = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getUserId().then((userId) =>
      navigation.navigate("Camera", {
        userId: userId,
        plantName: plantName,
        plantType: plantType,
        plantLabelColor: plantLabelColor,
      })
    );
  };

  const handlePressBack = () => {
    navigation.goBack();
  };

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
        <PickerLabelColor
          plantLabelColor={plantLabelColor}
          handlePlantLabelColor={setPlantLabelColor}
        />
        <View style={tailwind("flex-row justify-evenly")}>
          <Button
            handleOnPress={handlePressBack}
            backgroundColor="bg-gray-200"
            textColor="text-gray-800"
            value="戻る"
          />
          <Button
            handleOnPress={handlePressNext}
            backgroundColor="bg-yellow-900"
            textColor="text-gray-100"
            value="次へ"
          />
        </View>
      </>
    </ScreenInitilize>
  );
};

export default CreatePlantScreen;
