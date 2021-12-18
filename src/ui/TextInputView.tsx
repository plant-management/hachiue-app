import React from "react";
import { View, Text, TextInput } from "react-native";
import tailwind from "tailwind-rn";

type TextInputViewProps = {
  title: string;
  textInput: string;
  handleTextInput: React.Dispatch<React.SetStateAction<string>>;
};

const TextInputView = (props: TextInputViewProps) => {
  return (
    <View style={tailwind("pb-8")}>
      <Text style={tailwind("text-lg font-bold pb-1 text-gray-800")}>
        {props.title}
      </Text>
      <TextInput
        onChangeText={props.handleTextInput}
        value={props.textInput}
        style={tailwind("bg-gray-200 rounded-full h-11 px-4 text-gray-800")}
      />
    </View>
  );
};

export default TextInputView;
