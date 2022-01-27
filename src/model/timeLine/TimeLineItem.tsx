import {
  View,
  Text,
  ListRenderItemInfo,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import { TimeLineItemType } from "..";
import tailwind from "tailwind-rn";

const TimeLineItem = (props: ListRenderItemInfo<TimeLineItemType>) => {
  return (
    <View style={tailwind("mb-4")}>
      <View style={tailwind("flex-row justify-between")}>
        <Text style={tailwind("text-base")}>{props.item.plantName}</Text>
        <Text style={tailwind("text-base text-gray-600")}>
          {props.item.day}
        </Text>
      </View>
      <TouchableOpacity
        style={tailwind(
          "flex-row items-center bg-white border border-gray-300 rounded-lg p-2"
        )}
      >
        <Image
          source={{ uri: props.item.characterImageUrl }}
          style={tailwind("w-16 h-16")}
        />
        <Text style={tailwind("text-base")}>{props.item.comment}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeLineItem;
