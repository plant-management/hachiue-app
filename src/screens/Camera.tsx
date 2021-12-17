import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const Camera = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route.params);
  }, []);

  return (
    <View>
      <Text>カメラページ</Text>
    </View>
  );
};

export default Camera;
