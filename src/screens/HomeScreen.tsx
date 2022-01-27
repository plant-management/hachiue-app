import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";

import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";
import { ScreenInitilize } from "../ui";
import { getUserId } from "../util/localUserId";
import { HomeItem } from "../model";

type ResponseType = {
  plantId: string;
  plantName: string;
  plantType: string;
  plantLabelColor: string;
  day: number;
  characterImage: string;
  onPressItem: (plantId: string) => void;
};

const HomeScreen = () => {
  const [response, setResponse] = useState<ResponseType[]>([]);
  const navigation = useNavigation();

  const handleOnPressItem = (plantId: string) => {
    navigation.navigate("Character", { plantId: plantId });
  };

  useFocusEffect(
    useCallback(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      (async () => {
        const userId = await getUserId();
        if (!userId) return;
        const res = await axios.get(
          `http://${REACT_NATIVE_PACKAGER_HOSTNAME}:8000/home/${userId}`
        );

        const itemList: ResponseType[] = [];
        for (const data of res.data) {
          itemList.push({
            plantId: data.plant_id,
            plantName: data.plant_name,
            plantType: data.plant_type,
            plantLabelColor: data.plant_label_color,
            day: data.day,
            characterImage: data.character_image,
            onPressItem: handleOnPressItem,
          });
        }
        setResponse(itemList);
      })();
    }, [])
  );

  return (
    <ScreenInitilize>
      <FlatList
        data={response}
        renderItem={HomeItem}
        keyExtractor={(item, index) => String(index)}
      />
    </ScreenInitilize>
  );
};

export default HomeScreen;
