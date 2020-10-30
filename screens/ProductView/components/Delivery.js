import React from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../../styles";
import { YMaps, Map } from "react-yandex-maps";

export default function Delivery() {
  const mapState = { center: [55.363244, 86.069056], zoom: 12 };
  let deviceWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>Адрес</Text>
      <YMaps>
        <Map
          state={mapState}
          width={deviceWidth - 50}
          height={deviceWidth - 150}
        />
      </YMaps>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkBg,
  },
});
