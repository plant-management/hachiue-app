import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";
import { getUserId } from "../util/localUserId";
import { ScreenInitilizeCharacter, CharacterFooter } from "../ui";
import { CharacterMain, CharacterMenu } from "../model";

type CharacterDataProps = {
  plantName: string;
  plantType: string;
  day: number;
  weatherIcon: ["sunny", "rain", "cloud"] | string;
  temp: number;
  humidity: number;
  satisfaction: number;
  comment: string;
  characterImage: string;
};

const CharacterScreen = () => {
  const [userId, setUserId] = useState("");
  const [characterData, setCharacterData] = useState<CharacterDataProps>();
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const userId = await getUserId();
      if (!userId) return;
      setUserId(userId);

      const res = await axios.get(
        `http://${REACT_NATIVE_PACKAGER_HOSTNAME}:8000/character/${userId}?plant_id=${route.params.plantId}`
      );
      setCharacterData({
        plantName: res.data.plant_name,
        plantType: res.data.plant_type,
        day: res.data.day,
        weatherIcon: res.data.weather_icon,
        temp: res.data.temp,
        humidity: res.data.humidity,
        satisfaction: res.data.satisfaction,
        comment: res.data.comment,
        characterImage: res.data.character_image,
      });
    })();
  }, []);

  const handleOnPressHome = () => {
    navigation.navigate("Home");
  };

  const handleOnPressTimeLine = () => {
    navigation.navigate("TimeLine");
  };

  const handleOnPressSetting = () => {
    navigation.navigate("Setting");
  };

  return (
    <ScreenInitilizeCharacter>
      <CharacterMain {...characterData} />
      {/* メニュー用の背景を設定するとフッターがどっかいく */}
      <CharacterMenu />
      <CharacterFooter
        onPressHome={handleOnPressHome}
        onPressTimeLine={handleOnPressTimeLine}
        onPressSetting={handleOnPressSetting}
      />
    </ScreenInitilizeCharacter>
  );
};

export default CharacterScreen;
