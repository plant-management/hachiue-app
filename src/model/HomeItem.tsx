import React from "react";
import { View, Text, ListRenderItem, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import tailwind from "tailwind-rn";

type ResponseType = {
  plantId: string;
  plantName: string;
  plantType: string;
  plantLabelColor: string;
  day: number;
  characterImage: string;
  onPressItem: (plantId: string) => void;
};

const HomeItem: ListRenderItem<ResponseType> = ({ item }) => {
  return (
    <TouchableOpacity
      style={tailwind("flex-row justify-center m-4")}
      onPress={() => item.onPressItem(item.plantId)}
    >
      <View
        style={{
          width: "8%",
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
          backgroundColor: item.plantLabelColor,
        }}
      />
      <View
        style={tailwind(
          "w-10/12 flex-row justify-evenly items-center py-6 bg-gray-50"
        )}
      >
        <Image
          source={{ uri: `data:image/png;base64,${item.characterImage}` }}
          style={tailwind("w-16 h-16")}
        />
        <View>
          <Text style={tailwind("text-lg")}>{item.plantName}</Text>
          <Text style={tailwind("text-sm")}>{`植物 : ${item.plantType}`}</Text>
          <Text style={tailwind("text-sm")}>{`日数 : ${item.day}日目`}</Text>
        </View>
      </View>
      <View
        style={{
          width: "8%",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: "#f9fafb",
        }}
      />
    </TouchableOpacity>
  );
};

export default HomeItem;
