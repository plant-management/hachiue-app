import React, { useEffect, useState } from "react";
import { Text, Button, FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import tailwind from "tailwind-rn";

import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";
import { ScreenInitilize } from "../ui";
import { getUserId } from "../util/localUserId";
import { HomeItem } from "../model";

type ResponseType = {
  plantName: string;
  plantType: string;
  plantLabelColor: string;
  day: number;
  characterImage: string;
};

const HomeScreen = () => {
  const [response, setResponse] = useState<ResponseType[]>([]);
  const navigation = useNavigation();

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
              plantName: data.plant_name,
              plantType: data.plant_type,
              plantLabelColor: data.plant_label_color,
              day: data.day,
              characterImage: data.character_image,
            },
          ];
        });
      }
    })();
  }, []);

  return (
    <ScreenInitilize>
      <>
        <FlatList
          data={response}
          renderItem={HomeItem}
          keyExtractor={(item, index) => String(index)}
        />
        <Button
          title="植物作成画面へ"
          onPress={() => navigation.navigate("CreatePlant")}
        />
      </>
    </ScreenInitilize>
  );
};

export default HomeScreen;
