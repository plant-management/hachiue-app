import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const userId = await getUserId();
      if (!userId) return;
      const res = await axios.get(
        `http://${REACT_NATIVE_PACKAGER_HOSTNAME}:8000/home/${userId}`
      );
      for (const data of res.data) {
        setResponse((prev) => {
          return [
            ...prev,
            {
              plantId: data.plant_id,
              plantName: data.plant_name,
              plantType: data.plant_type,
              plantLabelColor: data.plant_label_color,
              day: data.day,
              characterImage: data.character_image,
              onPressItem: handleOnPressItem,
            },
          ];
        });
      }
    })();
  }, []);

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
