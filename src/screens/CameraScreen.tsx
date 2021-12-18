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
import axios from "axios";

import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";
import { getUserId } from "../util/localUserId";

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
          { resize: { height: 16, width: 16 } },
        ],
        { base64: true, compress: 1, format: SaveFormat.JPEG }
      );

      const userId = await getUserId();

      axios
        .post(
          `http://${REACT_NATIVE_PACKAGER_HOSTNAME}:8000/new_plant_data/${userId}?b64_image=${manipResult.base64}`,
          {
            plant_name: route.params.plantName,
            plant_type: route.params.plantType,
            plant_label_color: route.params.plantLabelColor,
          }
        )
        .then((res) => {
          navigation.navigate("Character", {
            plantName: res.data.plant_name,
            plantType: res.data.plant_type,
            plantLabelColor: res.data.plant_label_color,
            userId: res.data.user_id,
            plantId: res.data.plant_id,
            weatherIcon: res.data.weather_icon,
            temp: res.data.temp,
            humidity: res.data.humidity,
            comment: res.data.comment,
            satisfaction: res.data.satisfaction,
            days: res.data.days,
          });
        })
        .catch((error) => {
          // alert(error.message);
          alert("通信エラーが発生しました。もう1度撮影してください。");
          setPicture("");
        });
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
