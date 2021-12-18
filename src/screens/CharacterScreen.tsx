import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";
import { getUserId } from "../util/localUserId";

const CharacterScreen = () => {
  const route = useRoute();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const userId = await getUserId();
      if (!userId) return;
      const res = await axios.get(
        `http://${REACT_NATIVE_PACKAGER_HOSTNAME}:8000/character/${userId}?plant_id=${route.params.plantId}`
      );
      console.log(res);
      console.log(route.params.plantId);
    })();
  }, []);

  return (
    <View>
      <Text>キャラクター画面</Text>
    </View>
  );
};

export default CharacterScreen;
