import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColor: null,
    };
  }

  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  myButtonPressed = () => {
    this.setState({ randomColor: this.getRandomColor() });
  };

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.randomColor }]}
      >
        <TouchableOpacity onPress={this.myButtonPressed}>
          <Text style={[styles.text]}> Change Background </Text>
          <Text style={[styles.rgb]}>{this.state.randomColor}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    paddingVertical: 12,
    backgroundColor: "#35BDD0",
    paddingHorizontal: 40,
    color: "#CAD5E2",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#CAD5E2",
  },
  rgb: {
    fontSize: 25,
    marginTop: 10,
    alignSelf: "center",
  },
});
export default App;
