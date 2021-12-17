import React from "react";
import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

type PickerViewProps = {
  title: string;
  pickerInput: string;
  handlePickerInput: React.Dispatch<React.SetStateAction<string>>;
};

const PickerView = (props: PickerViewProps) => {
  const pickerItemList = ["小松菜", "二十日大根"];

  return (
    <View>
      <Text>{props.title}</Text>
      <TextInput
        onChangeText={props.handlePickerInput}
        value={props.pickerInput}
      />
      <Picker
        selectedValue={props.pickerInput}
        onValueChange={(itemValue) => props.handlePickerInput(itemValue)}
      >
        {pickerItemList.map((item) => (
          <Picker.Item label={item} value={item} key={item} />
        ))}
      </Picker>
    </View>
  );
};

export default PickerView;
