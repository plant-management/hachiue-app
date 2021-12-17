import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";

type PickerLabelColorProps = {
  handleLabelColorInput: React.Dispatch<React.SetStateAction<string>>;
};

const PickerLabelColor = (props: PickerLabelColorProps) => {
  const labelColorList = [
    "#FFA4A4",
    "#FFEF9D",
    "#A2E4A8",
    "#BAFFFB",
    "#D479FF",
  ];

  return (
    <View style={tailwind("pb-8")}>
      <Text style={tailwind("text-lg font-bold pb-1 text-gray-800")}>
        ラベルカラー
      </Text>
      <View style={tailwind("flex-row justify-between")}>
        {labelColorList.map((labelColor) => (
          <TouchableOpacity
            key={labelColor}
            onPress={() => {
              props.handleLabelColorInput(labelColor);
            }}
          >
            <View
              style={{ backgroundColor: labelColor, width: 32, height: 32 }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PickerLabelColor;
