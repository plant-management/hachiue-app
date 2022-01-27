import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { ScreenInitilize } from "../ui";
import { TimeLineItem, TimeLineItemType } from "../model";

const TimeLineScreen = () => {
  const [timeLineList, setTimeLineList] = useState<TimeLineItemType[]>();

  useFocusEffect(
    useCallback(() => {
      setTimeLineList([
        {
          plantId: "aaa",
          plantName: "テストプラント1",
          day: "1-27 Thu 10:09",
          characterImageUrl:
            "https://images.keizai.biz/yamaguchi_keizai/photonews/1319766662_b.jpg",
          comment: "つらたんみづちょーだい",
        },
        {
          plantId: "bbb",
          plantName: "テストプラント2",
          day: "1-27 Thu 18:09",
          characterImageUrl:
            "https://images.keizai.biz/yamaguchi_keizai/photonews/1319766662_b.jpg",
          comment: "おみづちょうだいよ！",
        },
        {
          plantId: "ccc",
          plantName: "テストプラント3",
          day: "1-27 Thu 18:35",
          characterImageUrl:
            "https://images.keizai.biz/yamaguchi_keizai/photonews/1319766662_b.jpg",
          comment: "あそぼ〜〜〜〜〜！",
        },
      ]);
    }, [])
  );

  return (
    <ScreenInitilize>
      <FlatList
        data={timeLineList}
        renderItem={TimeLineItem}
        keyExtractor={(item, index) => String(index)}
      />
    </ScreenInitilize>
  );
};

export default TimeLineScreen;
