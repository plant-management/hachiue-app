import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground, Button } from "react-native";
import tailwind from "tailwind-rn";

import backgroundImage from "../../assets/background.png";

const InitialSettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={tailwind("h-full w-full")}
      >
        <Text>初期設定画面</Text>
        <Button
          title="植物作成画面へ"
          onPress={() => navigation.navigate("CreatePlant")}
        />
        <Button
          title="ホーム画面へ"
          onPress={() => navigation.navigate("MainTab")}
        />
      </ImageBackground>
    </View>
  );
};

export default InitialSettingScreen;
