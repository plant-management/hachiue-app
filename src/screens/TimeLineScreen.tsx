import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";
import { ScreenInitilize } from "../ui";
import { TimeLineItem, TimeLineItemType } from "../model";
import { getUserId } from "../util/localUserId";
import axios from "axios";

const TimeLineScreen = () => {
  const [timeLineList, setTimeLineList] = useState<TimeLineItemType[]>([]);

  useFocusEffect(
    useCallback(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      (async () => {
        const userId = await getUserId();
        if (!userId) return;
        const res = await axios.get(
          `http://${REACT_NATIVE_PACKAGER_HOSTNAME}:8000/timeline/${userId}`
        );
        console.log("n回目");
        for (const data of res.data) {
          setTimeLineList((prev) => {
            console.log(prev);
            return [
              ...prev,
              {
                plantId: data.plant_id,
                plantName: data.plant_name,
                day: data.created_at,
                characterImageUrl: data.character_image,
                comment: data.comment,
              },
            ];
          });
        }
      })();
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
