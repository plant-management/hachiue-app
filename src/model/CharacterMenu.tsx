import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const CharacterMenu = () => {
  const menuRowCss = tailwind("flex-row justify-evenly pb-4");
  const menuCss = tailwind(
    "w-20 h-20 bg-white rounded-lg justify-center items-center flex border-gray-200 border-2"
  );
  const iconCss = tailwind("");

  return (
    // アイコンごとにコンポーネント分割
    <ScrollView style={tailwind("bg-gray-100 pt-4")}>
      <View style={menuRowCss}>
        <TouchableOpacity style={menuCss}>
          <Ionicons name="ios-camera" size={45} color="gray" />
          <Text style={tailwind("text-gray-500")}>さつえい</Text>
        </TouchableOpacity>
        <TouchableOpacity style={menuCss}>
          <Ionicons name="shirt" size={45} color="gray" />
          <Text style={tailwind("text-gray-500")}>着せ替え</Text>
        </TouchableOpacity>
        <TouchableOpacity style={menuCss}>
          <Ionicons name="ios-book" size={45} color="gray" />
          <Text style={tailwind("text-gray-500")}>記録</Text>
        </TouchableOpacity>
      </View>
      <View style={menuRowCss}>
        <TouchableOpacity style={menuCss}>
          <MaterialCommunityIcons
            name="camera-account"
            size={45}
            color="gray"
          />
          <Text style={tailwind("text-gray-500")}>キャラ撮影</Text>
        </TouchableOpacity>
        <TouchableOpacity style={menuCss}>
          <Entypo name="twitter-with-circle" size={45} color="gray" />
          <Text style={tailwind("text-gray-500")}>着せ替え</Text>
        </TouchableOpacity>
        <TouchableOpacity style={menuCss}>
          <MaterialCommunityIcons
            name="card-account-details"
            size={45}
            color="gray"
          />
          <Text style={tailwind("text-gray-500")}>記録</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CharacterMenu;
