import { View, Text, ListRenderItemInfo } from "react-native";
import React from "react";

import { TimeLineItemType } from "..";

const TimeLineItem = (props: ListRenderItemInfo<TimeLineItemType>) => {
  return (
    <View>
      <Text>{props.item.day}</Text>
    </View>
  );
};

export default TimeLineItem;
