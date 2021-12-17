import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import tailwind from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState<Camera | null>(null);
  const [picture, setPicture] = useState("");

  const route = useRoute();
  const navigation = useNavigation();

  const takePicture = async () => {
    if (camera) {
      const image = await camera.takePictureAsync();
      setPicture(image.uri);

      const length = image.width > image.height ? image.height : image.width;
      const originX = (image.width - length) / 2;
      const originY = (image.height - length) / 2;
      const manipResult = await manipulateAsync(
        image.uri,
        [
          {
            crop: {
              height: length,
              width: length,
              originX: originX,
              originY: originY,
            },
          },
          { resize: { height: 224, width: 224 } },
        ],
        { base64: true, compress: 1, format: SaveFormat.JPEG }
      );
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
      {!picture ? (
        <Camera
          type={type}
          style={tailwind("flex-1")}
          ref={(ref) => setCamera(ref)}
        />
      ) : (
        <Image source={{ uri: picture }} style={tailwind("flex-1")} />
      )}

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
