import React from "react";
import { Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenInitilize } from "../ui";

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenInitilize>
      <>
        <Text>設定画面</Text>
        <Button
          title="初期設定画面へ"
          onPress={() => navigation.navigate("InitialSetting")}
        />
      </>
    </ScreenInitilize>
  );
};

export default SettingScreen;
