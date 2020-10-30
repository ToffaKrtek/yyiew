import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

const footerData = {
  yearAdd: 2020,
  companyName: "TK",
  adressCompany: "г. Кемерово, ул....",
};

export default function Footer() {
  return (
    <View style={[gs.sectionContainer]}>
      <Text style={styles.footerData}>
        {footerData.companyName}
        <br />
        {footerData.adressCompany}
        <br />
        {footerData.yearAdd}
        <AntDesign name="copyright" size={12} color={colors.lightHl} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerData: {
    color: colors.lightHl,
    textAlign: "center",
  },
});
