import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Button } from "react-native";

import { ScreenInitilize } from "../ui";

const InitialSettingScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenInitilize>
      <>
        <Text>初期設定画面</Text>
        <Button
          title="植物作成画面へ"
          onPress={() => navigation.navigate("CreatePlant")}
        />
        <Button
          title="ホーム画面へ"
          onPress={() => navigation.navigate("MainTab")}
        />
      </>
    </ScreenInitilize>
  );
};

export default InitialSettingScreen;
