import React from "react";
import { View, Text, TextInput } from "react-native";

type PickerViewProps = {
  title: string;
  pickerInput: string;
  handlePickerInput: React.Dispatch<React.SetStateAction<string>>;
};

const PickerView = (props: PickerViewProps) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <TextInput
        onChangeText={props.handlePickerInput}
        value={props.pickerInput}
      />
    </View>
  );
};

export default PickerView;
