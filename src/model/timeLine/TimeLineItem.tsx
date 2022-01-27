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
    <View>
      <View style={tailwind("flex-row justify-between")}>
        <Text>{props.item.plantName}</Text>
        <Text>{props.item.day}</Text>
      </View>
      <TouchableOpacity style={tailwind("flex-row")}>
        <Image
          source={{ uri: props.item.characterImageUrl }}
          style={tailwind("w-16 h-16")}
        />
        <Text>{props.item.comment}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeLineItem;
