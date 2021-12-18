import React from "react";
import { Image, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";

import createPlantIcon from "../../assets/create_plant.png";

type CreatePlantButtonProps = {
  handleCreatePlant: () => void;
};

const CreatePlantButton = (props: CreatePlantButtonProps) => {
  return (
    <TouchableOpacity onPress={props.handleCreatePlant}>
      <Image source={createPlantIcon} style={tailwind("w-8 h-6 mr-6")} />
    </TouchableOpacity>
  );
};

export default CreatePlantButton;
