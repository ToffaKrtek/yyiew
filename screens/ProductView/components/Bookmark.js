import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

export default function Bookmark() {
  return (
    <View style={[styles.bookmark, gs.center]}>
      <FontAwesome name="plus-square" size={24} color={colors.pink} />
    </View>
  );
}

const styles = StyleSheet.create({
  bookmark: {
    position: "absolute",
    width: 56,
    height: 56,
    right: 32,
    top: -56 / 2,
    backgroundColor: colors.text,
    borderRadius: 56 / 2,
    zIndex: 10,
  },
});
