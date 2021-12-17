import React, { useEffect } from "react";
import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import tailwind from "tailwind-rn";

import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";
import { ScreenInitilize } from "../ui";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenInitilize>
      <>
        <Text style={tailwind("text-blue-800 font-semibold")}>ホーム画面</Text>
        <Button
          title="キャラクター画面へ"
          onPress={() => navigation.navigate("Character")}
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
