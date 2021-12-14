import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>設定画面</Text>
      <Button
        title="初期設定画面へ"
        onPress={() => navigation.navigate("InitialSetting")}
      />
    </View>
  );
};

export default SettingScreen;
