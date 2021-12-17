import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tailwind from "tailwind-rn";

type ButtonProps = {
  handleOnPress: () => void;
  backgroundColor: string;
  textColor: string;
  value: string;
};

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.handleOnPress}>
      <View style={tailwind(`${props.backgroundColor} px-4 py-2 rounded-lg`)}>
        <Text style={tailwind(`${props.textColor} text-xl font-bold`)}>
          {props.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
