import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Camera } from "expo-camera";
import tailwind from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState<Camera | null>(null);

  const route = useRoute();

  const takePicture = async () => {
    if (camera) {
      const image = await camera.takePictureAsync();
      alert(image.uri);
    }
  };

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
      <Camera
        type={type}
        style={tailwind("flex-1")}
        ref={(ref) => setCamera(ref)}
      />
      <View style={tailwind("h-20 justify-evenly items-center flex-row")}>
        <TouchableOpacity
          style={tailwind("w-11 h-11 rounded-full border-gray-500 border-8")}
          onPress={takePicture}
        />
        <TouchableOpacity
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Ionicons name="ios-camera-reverse" size={50} color="gray" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CameraScreen;
