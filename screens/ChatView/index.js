import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import axios from "axios";

const serverUrl = "http://192.168.0.25:5000";
const http = axios.create({
  baseURL: serverUrl,
});

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }

  onLogin() {
    const { isLoggedIn, username } = this.state;
    if (!isLoggedIn) {
      http
        .post("/login", { username })
        .then(() => this.setState({ isLoggedIn: true }))
        .catch((err) => console.log(err));
    }
  }

  addMessage(message) {
    const { messages } = this.state;
    messages.push(message);
    this.setState({
      lastUpdated: new Date(),
    });
  }

  onMessageSend() {
    const { input, username } = this.state;

    http
      .post("/send", { username, message: input })
      .then(() => this.addMessage(input));
  }

  render() {
    const { messages, isLoggedIn, lastUpdated } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text>Login</Text>
          <TextInput onChangeText={(val) => this.setState({ username: val })} />
          <Button title="Login" onPress={() => this.onLogin()} />
          <Text>Online status: {isLoggedIn ? "Online" : "Offline"}</Text>
        </View>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Text>{item}</Text>}
          extraData={lastUpdated}
        />
        <TextInput onChangeText={(val) => this.setState({ input: val })} />
        <Button title="Send Message" onPress={() => this.onMessageSend()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
