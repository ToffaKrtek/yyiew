import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "./styles";
import ProductView from "./screens/ProductView";
import ChatView from "./screens/ChatView";
import Router from "react-native-easy-router";

export default class App extends React.Component {
        constructor(props){
                super(props);        
        }

  render(){
  return (
    <ScrollView style={styles.container}>
      <ProductView />
      <ChatView />
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
