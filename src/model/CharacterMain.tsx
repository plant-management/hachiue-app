import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import tailwind from "tailwind-rn";
import axios from "axios";

import { REACT_NATIVE_PACKAGER_HOSTNAME } from "@env";
import sunny from "../../assets/sunny.png";
import cloud from "../../assets/cloud.png";
import rain from "../../assets/rain.png";
import separateBar from "../../assets/separate_bar.png";
import balloon from "../../assets/balloon.png";
import { getUserId } from "../util/localUserId";

type CharacterDataProps = {
  plantId: string;
  plantName: string;
  plantType: string;
  day: number;
  weatherIcon: string;
  temp: number;
  humidity: number;
  satisfaction: number;
  comment: string;
  characterImage: string;
};

const CharacterMain = (props: CharacterDataProps) => {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  const onPressCharacter = async () => {
    const userId = await getUserId();
    if (!userId) return;

    // 異なるコメントを表示させる
    let res;
    do {
      res = await axios.get(
        `http://${REACT_NATIVE_PACKAGER_HOSTNAME}:8000/character_tap_comment/${userId}?plant_id=${props.plantId}`
      );
    } while ((res.data as string) === comment);
    setShowComment(true);
    setComment(res.data as string);

    // 表示中のコメントを3秒後に非表示にする
    // 連続タップ時にTimeoutが何度も実行されないようにする
    const newTimerId = setTimeout(() => {
      setShowComment(false);
    }, 3000);
    if (timerId) clearTimeout(timerId);
    setTimerId(newTimerId);
  };

  return (
    // 巨大すぎるからCEDC後にコンポーネントに分ける
    <View style={tailwind("h-3/5")}>
      <View style={tailwind("h-2/5 px-4")}>
        <View style={tailwind("h-2/3 py-2")}>
          <View style={tailwind("flex-row justify-between items-center pb-2")}>
            <View>
              <View style={tailwind("flex-row items-end pb-0.5")}>
                <Text style={tailwind("text-4xl pr-2")}>{props.plantName}</Text>
                <Text>({props.plantType})</Text>
              </View>
              <Text style={tailwind("text-xl")}>{props.day}日目</Text>
            </View>
            <View style={tailwind("flex-row items-center")}>
              <Image
                source={
                  props.weatherIcon === "sunny"
                    ? sunny
                    : props.weatherIcon === "cloud"
                    ? cloud
                    : rain
                }
                style={tailwind("w-16 h-16")}
              />
              <View style={tailwind("pl-2")}>
                <Text style={tailwind("text-lg")}>{props.temp}℃</Text>
                <Text style={tailwind("text-lg")}>{props.humidity}%</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={tailwind("text-lg")}>
              まんぞく度 : {props.satisfaction}
            </Text>
          </View>
        </View>
      </View>

      {/* キャラクター表示部分 */}
      <View style={tailwind("h-3/5 relative")}>
        <View style={tailwind("flex-1 justify-center items-center")}>
          <TouchableOpacity
            onPress={() => onPressCharacter()}
            activeOpacity={1}
          >
            <Image
              source={{ uri: `data:image/png;base64,${props.characterImage}` }}
              style={tailwind("h-52 w-52")}
            />
          </TouchableOpacity>
          <Image source={separateBar} style={tailwind("w-full")} />
        </View>
        {showComment && (
          <ImageBackground
            source={balloon}
            style={tailwind(
              "absolute left-4 w-36 h-24 flex-row justify-center items-center"
            )}
          >
            <Text style={tailwind("px-4 pb-2")}>{comment}</Text>
          </ImageBackground>
        )}
      </View>
    </View>
  );
};

export default CharacterMain;
