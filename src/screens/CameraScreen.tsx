import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Camera } from "expo-camera";
import tailwind from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const route = useRoute();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={tailwind("flex-1")}>
      <Camera type={type} style={tailwind("flex-1")} />
      <TouchableOpacity
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
        style={tailwind("h-20 justify-evenly items-center flex-row")}
      >
        <Ionicons name="ios-camera-reverse" size={50} color="gray" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CameraScreen;
