import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

const starsColors = ["#e3ab53", "#8b6f43"];
// const Circle = (props) => {
//   return <View style={[styles.circle, props.style]} />;
// };

const statistics = {
  count: 1800,
  allViewers: 7860,
  rate: 4.5,
};

function publishCount(num) {
  if (num > 1000) {
    const shortNum = parseFloat((num / 1000).toFixed(1));
    return String(shortNum) + "тыс.";
  } else return String(num);
}

const viewers = publishCount(statistics.allViewers);
const count = publishCount(statistics.count);

const starsRate = [
  ...Array(parseInt(statistics.rate)).fill(starsColors[0]),
  ...Array(5 - parseInt(statistics.rate)).fill(starsColors[1]),
];

export default function Stats() {
  return (
    <View style={[gs.rowCenter, gs.sectionContainer]}>
      <View style={{ marginBottom: 21 }}>
        <View style={[gs.rowCenter, styles.statisticsContainer]}>
          <AntDesign name="barschart" size={28} color={colors.darkHl} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.title}>Продано: {count}</Text>
          </View>
        </View>
        <View style={[gs.rowCenter, { marginLeft: 35 }]}>
          {starsRate.map((color, index) => {
            return (
              <Entypo
                name="star"
                size={12}
                color={color}
                key={index}
                style={{ marginHorizontal: 2 }}
              />
            );
          })}
        </View>
      </View>

      <View style={{ marginLeft: 8 }}>
        <Text style={styles.title}>Просмотров: {viewers}</Text>
        <View style={{ padding: 4 }}>
          <Button
            title="Оценить"
            onPress={() => {
              this.props.navigation.navigate("ChatView");
            }}
          />
        </View>
      </View>
      {/* <View style={styles.circlesContainer}>
        <Circle
          style={{ backgroundColor: "#999", marginRight: -10, zIndex: 3 }}
        />
        <Circle
          style={{ backgroundColor: "#888", marginRight: -10, zIndex: 2 }}
        />
        <Circle
          style={{ backgroundColor: "#777", marginRight: -10, zIndex: 1 }}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  statisticsContainer: {
    paddingRight: 6,
    borderRightWidth: 1,
    borderColor: "#444",
  },
  title: {
    fontSize: 14,
    color: colors.darkHl,
  },
  // circlesContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "flex-end",
  // },
  // circle: {
  //   width: 36,
  //   height: 36,
  //   borderRadius: 36 / 2,
  //   borderWidth: 2,
  //   borderColor: colors.lightBg,
  // },
});
