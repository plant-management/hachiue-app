import React, { useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import tailwind from "tailwind-rn";

type PickerViewProps = {
  title: string;
  pickerItemList: string[];
  pickerInput: string;
  handlePickerInput: React.Dispatch<React.SetStateAction<string>>;
};

const PickerView = (props: PickerViewProps) => {
  useEffect(() => {
    props.handlePickerInput(props.pickerItemList[0]);
  }, []);

  return (
    <View style={tailwind("")}>
      <Text style={tailwind("text-lg font-bold text-gray-800")}>
        {props.title}
      </Text>
      <Picker
        selectedValue={props.pickerInput}
        onValueChange={(itemValue) => props.handlePickerInput(itemValue)}
        itemStyle={tailwind("text-lg")}
      >
        {props.pickerItemList.map((item) => (
          <Picker.Item
            key={item}
            label={item}
            value={item}
            style={tailwind("text-lg")}
          />
        ))}
      </Picker>
    </View>
  );
};

export default PickerView;
