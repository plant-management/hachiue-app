import React, { useEffect } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import tailwind from "tailwind-rn";
import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";

import backgroundImage from "../../assets/background.png";

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // axios
    //   .get("http://192.168.11.2:8000/home/942202ec-4ad7-4979-a674-fb006438e012")
    //   // .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => alert(response.data[0].plant_name));
    console.log(REACT_NATIVE_PACKAGER_HOSTNAME);
  }, []);

  return (
    <View>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={tailwind("h-full w-full")}
      >
        <Text style={tailwind("text-blue-800 font-semibold")}>ホーム画面</Text>
        <Button
          title="キャラクター画面へ"
          onPress={() => navigation.navigate("Character")}
        />
        <Button
          title="植物作成画面へ"
          onPress={() => navigation.navigate("CreatePlant")}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
