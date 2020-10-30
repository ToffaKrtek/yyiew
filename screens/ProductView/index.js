import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Header from "./components/Header";
import { colors } from "../../styles";
import Bookmark from "./components/Bookmark";
import About from "./components/About";
import Stats from "./components/Stats";
import Characteristics from "./components/Characteristics";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";

export default function index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />

      <View>
        <Bookmark />
        <About />
        <Stats />
        <Characteristics />
        <Delivery />
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
