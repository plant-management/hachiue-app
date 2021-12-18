import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import tailwind from "tailwind-rn";

import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";
import { getUserId } from "../util/localUserId";
import { ScreenInitilizeCharacter } from "../ui";

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
    })();
  }, []);

  return (
    <ScreenInitilizeCharacter>
      <>
        <View style={tailwind("bg-green-300 h-3/6")}>
          <Text>キャラクター・植物情報</Text>
        </View>
        <View style={tailwind("bg-gray-300 h-2/6")}>
          <Text>キャラクター・植物情報</Text>
        </View>
        <View style={tailwind("bg-yellow-300 h-1/6")}>
          <Text>キャラクター・植物情報</Text>
        </View>
      </>
    </ScreenInitilizeCharacter>
  );
};

export default CharacterScreen;
