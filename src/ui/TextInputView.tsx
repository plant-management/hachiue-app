import React from "react";
import { View, Text, TextInput } from "react-native";

type TextInputViewProps = {
  title: string;
  textInput: string;
  handleTextInput: React.Dispatch<React.SetStateAction<string>>;
};

const TextInputView = (props: TextInputViewProps) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <TextInput onChangeText={props.handleTextInput} value={props.textInput} />
    </View>
  );
};

export default TextInputView;
