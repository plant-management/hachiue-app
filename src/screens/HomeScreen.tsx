import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ホーム画面</Text>
      <Button
        title="初期設定画面へ"
        onPress={() => navigation.navigate("InitialSetting")}
      />
      <Button
        title="キャラクター画面へ"
        onPress={() => navigation.navigate("Character")}
      />
    </View>
  );
};

export default HomeScreen;
