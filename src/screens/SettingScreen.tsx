import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tailwind from "tailwind-rn";

import backgroundImage from "../../assets/background.png";

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={tailwind("h-full w-full")}
      >
        <Text>設定画面</Text>
        <Button
          title="初期設定画面へ"
          onPress={() => navigation.navigate("InitialSetting")}
        />
      </ImageBackground>
    </View>
  );
};

export default SettingScreen;
