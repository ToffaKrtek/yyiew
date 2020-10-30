import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

export default function Characteristics() {
  return (
    <View style={gs.sectionContainer}>
      <Text style={gs.sectionTitle}>Характеристики: </Text>

      <View style={[styles.characteristicsContainer, gs.rowBetween]}>
        <View style={styles.OneCharContainer}>
          <View style={[gs.center, styles.characteristic]}>
            <Feather name="user-check" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.charName}>Выбор пользователей </Text>
        </View>

        <View style={styles.OneCharContainer}>
          <View style={[gs.center, styles.characteristic]}>
            <FontAwesome5
              name="baby-carriage"
              size={24}
              color={colors.lightHl}
            />
          </View>
          <Text style={styles.charName}>Можно с детьми</Text>
        </View>

        <View style={styles.OneCharContainer}>
          <View style={[gs.center, styles.characteristic]}>
            <FontAwesome name="clock-o" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.charName}>В удобное время</Text>
        </View>

        <View style={styles.OneCharContainer}>
          <View style={[gs.center, styles.characteristic]}>
            <FontAwesome5 name="user-secret" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.charName}>Инкогнито</Text>
        </View>

        <View style={styles.OneCharContainer}>
          <View style={[gs.center, styles.characteristic]}>
            <FontAwesome5 name="yin-yang" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.charName}>Дарит спокойствие</Text>
        </View>

        <View style={styles.OneCharContainer}>
          <View style={[gs.center, styles.characteristic]}>
            <FontAwesome5 name="robot" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.charName}>Вершина робототехники</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  characteristicsContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    flexWrap: "wrap",
  },
  OneCharContainer: {
    alignItems: "center",
    width: 95,
    marginVertical: 12,
  },
  characteristic: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#444",
  },
  charName: {
    color: colors.lightHl,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
});
