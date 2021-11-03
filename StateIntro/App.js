import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#7B8788"
          placeholder="Enter value here..."
          onChangeText={(text) => {
            this.setState({ text });
          }}
        />
        <Text
          style={{
            marginTop: 60,
            fontSize: 25,
          }}
        >
          {this.state.text
            .split(" ")
            .map((text) => text && "😉")
            .join("")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    marginTop: 40,
    height: 50,
    width: 200,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#23abab",
  },
});

export default App;
